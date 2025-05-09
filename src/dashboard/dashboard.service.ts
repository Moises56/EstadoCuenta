import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getResumen() {
    try {
      // Obtener el conteo total de usuarios
      const totalUsuariosResult = await this.prisma.$queryRaw`
        SELECT COUNT(*) as total FROM USERS
      `;
      const totalUsuarios = (totalUsuariosResult as any[])[0]?.total || 0;

      // Obtener el conteo total de claves catastrales
      const totalClavesResult = await this.prisma.$queryRaw`
        SELECT COUNT(DISTINCT CLAVE_CATASTRAL) as total FROM CLAVES_RUTAS
      `;
      const totalClavesCatastrales = (totalClavesResult as any[])[0]?.total || 0;

      // Obtener el conteo de rutas
      const totalRutasResult = await this.prisma.$queryRaw`
        SELECT COUNT(DISTINCT RUTA) as total FROM CLAVES_RUTAS
      `;
      const totalRutas = (totalRutasResult as any[])[0]?.total || 0;

      // Obtener búsquedas por usuario
      const busquedasPorUsuarioResult = await this.prisma.$queryRaw`
        SELECT u.USERNAME as username, u.FULL_NAME as fullName, COUNT(l.LogId) as totalBusquedas
        FROM USERS u
        LEFT JOIN LOGS l ON u.UserId = l.USER_ID
        WHERE l.ACTION = 'SEARCH'
        GROUP BY u.UserId, u.USERNAME, u.FULL_NAME
        ORDER BY COUNT(l.LogId) DESC
      `;

      return {
        totalUsuarios,
        totalClavesCatastrales,
        totalRutas,
        busquedasPorUsuario: busquedasPorUsuarioResult || [],
        fechaActualizacion: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Error al obtener el resumen: ${error.message}`);
    }
  }

  async getResumenPorColonia() {
    try {
      const resumenColonias = await this.prisma.$queryRaw`
        SELECT 
          rc.COLONIA,
          COUNT(DISTINCT cr.CLAVE_CATASTRAL) as totalPropiedades,
          COUNT(DISTINCT m.MoraId) as totalMoras,
          SUM(COALESCE(m.IMPUESTO, 0)) as totalImpuesto,
          SUM(COALESCE(m.TREN_DE_ASEO, 0)) as totalTrenAseo,
          SUM(COALESCE(m.TASA_BOMBEROS, 0)) as totalTasaBomberos
        FROM RUTAS_COLONIA rc
        LEFT JOIN CLAVES_RUTAS cr ON rc.RUTA = cr.RUTA
        LEFT JOIN MORA m ON cr.CLAVE_CATASTRAL = m.ART_ID_DOC
        GROUP BY rc.COLONIA
        ORDER BY rc.COLONIA
      `;

      return (resumenColonias as any[]).map(colonia => ({
        colonia: colonia.COLONIA,
        totalPropiedades: colonia.totalPropiedades || 0,
        totalMoras: colonia.totalMoras || 0,
        deuda: {
          totalImpuesto: colonia.totalImpuesto || 0,
          totalTrenAseo: colonia.totalTrenAseo || 0,
          totalTasaBomberos: colonia.totalTasaBomberos || 0,
          total: (colonia.totalImpuesto || 0) + (colonia.totalTrenAseo || 0) + (colonia.totalTasaBomberos || 0)
        }
      }));
    } catch (error) {
      throw new Error(`Error al obtener el resumen por colonia: ${error.message}`);
    }
  }

  async getResumenAnual() {
    try {
      const resumenAnual = await this.prisma.$queryRaw`
        SELECT 
          OBL_YEAR as año,
          COUNT(*) as totalRegistros,
          SUM(COALESCE(IMPUESTO, 0)) as totalImpuesto,
          SUM(COALESCE(TREN_DE_ASEO, 0)) as totalTrenAseo,
          SUM(COALESCE(TASA_BOMBEROS, 0)) as totalTasaBomberos
        FROM MORA
        WHERE OBL_YEAR IS NOT NULL
        GROUP BY OBL_YEAR
        ORDER BY OBL_YEAR
      `;

      return (resumenAnual as any[]).map(año => ({
        año: año.año,
        totalRegistros: año.totalRegistros || 0,
        deuda: {
          totalImpuesto: año.totalImpuesto || 0,
          totalTrenAseo: año.totalTrenAseo || 0,
          totalTasaBomberos: año.totalTasaBomberos || 0,
          total: (año.totalImpuesto || 0) + (año.totalTrenAseo || 0) + (año.totalTasaBomberos || 0)
        }
      }));
    } catch (error) {
      throw new Error(`Error al obtener el resumen anual: ${error.message}`);
    }
  }

  async getResumenPorRuta(ruta: string) {
    try {
      // Verificar que la ruta existe
      const rutaExiste = await this.prisma.$queryRaw`
        SELECT COUNT(*) as count FROM CLAVES_RUTAS WHERE RUTA = ${ruta}
      `;

      if (!(rutaExiste as any[])[0]?.count) {
        throw new NotFoundException(`Ruta ${ruta} no encontrada`);
      }

      // Obtener información de la colonia
      const coloniaInfo = await this.prisma.$queryRaw`
        SELECT COLONIA FROM RUTAS_COLONIA WHERE RUTA = ${ruta} LIMIT 1
      `;
      const colonia = (coloniaInfo as any[])[0]?.COLONIA || 'Sin asignar';

      // Obtener el resumen de la ruta
      const resumenRuta = await this.prisma.$queryRaw`
        SELECT 
          COUNT(DISTINCT cr.CLAVE_CATASTRAL) as totalPropiedades,
          COUNT(DISTINCT m.MoraId) as totalMoras,
          SUM(COALESCE(m.IMPUESTO, 0)) as totalImpuesto,
          SUM(COALESCE(m.TREN_DE_ASEO, 0)) as totalTrenAseo,
          SUM(COALESCE(m.TASA_BOMBEROS, 0)) as totalTasaBomberos
        FROM CLAVES_RUTAS cr
        LEFT JOIN MORA m ON cr.CLAVE_CATASTRAL = m.ART_ID_DOC
        WHERE cr.RUTA = ${ruta}
      `;

      const datos = (resumenRuta as any[])[0];
      const totalImpuesto = datos?.totalImpuesto || 0;
      const totalTrenAseo = datos?.totalTrenAseo || 0;
      const totalTasaBomberos = datos?.totalTasaBomberos || 0;

      // Obtener desglose por año
      const desgloseAnual = await this.prisma.$queryRaw`
        SELECT 
          m.OBL_YEAR as año,
          COUNT(*) as totalRegistros,
          SUM(COALESCE(m.IMPUESTO, 0)) as totalImpuesto,
          SUM(COALESCE(m.TREN_DE_ASEO, 0)) as totalTrenAseo,
          SUM(COALESCE(m.TASA_BOMBEROS, 0)) as totalTasaBomberos
        FROM CLAVES_RUTAS cr
        JOIN MORA m ON cr.CLAVE_CATASTRAL = m.ART_ID_DOC
        WHERE cr.RUTA = ${ruta} AND m.OBL_YEAR IS NOT NULL
        GROUP BY m.OBL_YEAR
        ORDER BY m.OBL_YEAR
      `;

      return {
        ruta,
        colonia,
        totalPropiedades: datos?.totalPropiedades || 0,
        totalMoras: datos?.totalMoras || 0,
        deuda: {
          totalImpuesto,
          totalTrenAseo,
          totalTasaBomberos,
          totalDeuda: totalImpuesto + totalTrenAseo + totalTasaBomberos
        },
        desgloseAnual: (desgloseAnual as any[]).map(año => ({
          año: año.año,
          totalRegistros: año.totalRegistros || 0,
          deuda: {
            totalImpuesto: año.totalImpuesto || 0,
            totalTrenAseo: año.totalTrenAseo || 0,
            totalTasaBomberos: año.totalTasaBomberos || 0,
            total: (año.totalImpuesto || 0) + (año.totalTrenAseo || 0) + (año.totalTasaBomberos || 0)
          }
        })),
        fechaConsulta: new Date().toISOString()
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Error al obtener el resumen por ruta: ${error.message}`);
    }
  }
}