import { Injectable } from '@nestjs/common';
import { GetEstadoCuentaDto } from './dto/get-estado-cuenta.dto';
import { GetEstadoCuentaPorRutaDto } from './dto/get-estado-cuenta-por-ruta.dto';
import {
  EstadoCuentaResponseDto,
  DetalleMoraDto,
} from './dto/estado-cuenta-response.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstadoCuentaService {
  constructor(private prisma: PrismaService) {}

  async getEstadoCuenta(
    dto: GetEstadoCuentaDto,
  ): Promise<EstadoCuentaResponseDto> {
    // Buscar los registros de mora para la clave catastral
    const registrosMora = await this.prisma.$queryRaw`
      SELECT * FROM MORA 
      WHERE ART_ID_DOC = ${dto.claveCatastral}
      ORDER BY OBL_YEAR ASC
    `;

    if (!registrosMora || (registrosMora as any[]).length === 0) {
      throw new Error('No se encontraron registros para esta clave catastral');
    }

    // Buscar el registro de clave y ruta
    const claveRutaResult = await this.prisma.$queryRaw`
      SELECT cr.*, rc.COLONIA
      FROM CLAVES_RUTAS cr
      LEFT JOIN RUTAS_COLONIA rc ON cr.RUTA = rc.RUTA
      WHERE cr.CLAVE_CATASTRAL = ${dto.claveCatastral}
    `;

    const claveRuta = (claveRutaResult as any[])[0];

    if (!claveRuta) {
      throw new Error(
        'No se encontró información de ruta para esta clave catastral',
      );
    }

    return this.construirEstadoCuenta(
      registrosMora as any[],
      claveRuta,
      dto.claveCatastral,
    );
  }

  async getEstadoCuentaPorRuta(
    dto: GetEstadoCuentaPorRutaDto,
  ): Promise<EstadoCuentaResponseDto[]> {
    // Buscar todas las claves catastrales asociadas a esta ruta
    const clavesCatastrales = await this.prisma.$queryRaw`
      SELECT CLAVE_CATASTRAL FROM CLAVES_RUTAS
      WHERE RUTA = ${dto.ruta}
    `;

    if (!clavesCatastrales || (clavesCatastrales as any[]).length === 0) {
      throw new Error('No se encontraron propiedades asociadas a esta ruta');
    }

    const resultados: EstadoCuentaResponseDto[] = [];

    // Para cada clave catastral, obtener su estado de cuenta
    for (const registro of clavesCatastrales as any[]) {
      try {
        const claveCatastral = registro.CLAVE_CATASTRAL;

        // Buscar los registros de mora para la clave catastral
        const registrosMora = await this.prisma.$queryRaw`
          SELECT * FROM MORA 
          WHERE ART_ID_DOC = ${claveCatastral}
          ORDER BY OBL_YEAR ASC
        `;

        if (registrosMora && (registrosMora as any[]).length > 0) {
          // Buscar el registro de clave y ruta
          const claveRutaResult = await this.prisma.$queryRaw`
            SELECT cr.*, rc.COLONIA
            FROM CLAVES_RUTAS cr
            LEFT JOIN RUTAS_COLONIA rc ON cr.RUTA = rc.RUTA
            WHERE cr.CLAVE_CATASTRAL = ${claveCatastral}
          `;

          const claveRuta = (claveRutaResult as any[])[0];

          if (claveRuta) {
            const estadoCuenta = this.construirEstadoCuenta(
              registrosMora as any[],
              claveRuta,
              claveCatastral,
            );
            resultados.push(estadoCuenta);
          }
        }
      } catch (error) {
        // Continuamos con la siguiente clave catastral si hay un error
        console.error(`Error al procesar clave catastral: ${error.message}`);
      }
    }

    if (resultados.length === 0) {
      throw new Error('No se encontraron estados de cuenta para esta ruta');
    }

    return resultados;
  }

  private construirEstadoCuenta(
    registrosMora: any[],
    claveRuta: any,
    claveCatastral: string,
  ): EstadoCuentaResponseDto {
    // Obtener fecha y hora actual
    const fechaActual = new Date();
    const fecha = fechaActual.toLocaleDateString('es-HN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const hora = fechaActual.toLocaleTimeString('es-HN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    // Mapear los registros de mora a DetallesMora con cálculos de recargo
    const detallesMora: DetalleMoraDto[] = registrosMora.map((mora) => {
      const year = mora.OBL_YEAR || '';
      // Usar valores por defecto (0) para campos numéricos que puedan estar vacíos
      const impuesto = mora.IMPUESTO != null ? Number(mora.IMPUESTO) : 0;
      const trenDeAseo =
        mora.TREN_DE_ASEO != null ? Number(mora.TREN_DE_ASEO) : 0;
      const tasaBomberos =
        mora.TASA_BOMBEROS != null ? Number(mora.TASA_BOMBEROS) : 0;
      const dias = this.calcularDiasVencidos(year);

      // Calcular recargo según la fórmula:
      // (impuesto + trenDeAseo + tasaBomberos) * dias * 0.22 / 360
      const baseImponible = impuesto + trenDeAseo + tasaBomberos;
      const recargo = (baseImponible * dias * 0.22) / 360;
      const total = baseImponible + recargo;

      return {
        year,
        impuesto,
        trenDeAseo,
        tasaBomberos,
        recargo,
        total,
        dias,
      };
    });

    // Calcular el total general
    const totalGeneral = detallesMora.reduce(
      (sum, detalle) => sum + detalle.total,
      0,
    );

    const mora = registrosMora[0];

    // Construir la respuesta usando valores por defecto para campos que puedan estar vacíos
    return {
      nombre: mora.NOMBRE || 'No disponible',
      identidad: mora.ACT_ID_CARD || 'No disponible',
      claveCatastral: claveCatastral,
      fecha,
      hora,
      colonia: claveRuta.COLONIA || 'No disponible',
      codigoUmaps: claveRuta.UMAPS != null ? claveRuta.UMAPS : 0,
      ruta: claveRuta.RUTA || 'No disponible',
      detallesMora,
      totalGeneral,
    };
  }

  /**
   * Calcula los días vencidos desde el 31 de agosto del año especificado hasta la fecha actual
   */
  private calcularDiasVencidos(year: string): number {
    if (!year || !/^\d{4}$/.test(year)) {
      return 0; // Devolver 0 si el año no es válido
    }

    const fechaVencimiento = new Date(parseInt(year), 7, 31); // 7 = Agosto (0-indexed)
    const fechaActual = new Date();

    // Si la fecha actual es anterior a la fecha de vencimiento, no hay días vencidos
    if (fechaActual < fechaVencimiento) {
      return 0;
    }

    // Calcular diferencia en milisegundos y convertir a días
    const diffTime = Math.abs(
      fechaActual.getTime() - fechaVencimiento.getTime(),
    );
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }
}
