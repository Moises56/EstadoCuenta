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

    // Convertir registros de mora a un mapa para facilitar la búsqueda por año
    const moraMap = new Map<string, any>();
    registrosMora.forEach((mora) => {
      if (mora.OBL_YEAR) {
        moraMap.set(mora.OBL_YEAR, mora);
      }
    });

    // Crear un array con todos los años desde 2015 hasta 2025
    const detallesMora: DetalleMoraDto[] = [];
    const formatoMoneda = new Intl.NumberFormat('es-HN', {
      style: 'currency',
      currency: 'HNL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    for (let year = 2015; year <= 2025; year++) {
      const yearStr = year.toString();
      const mora = moraMap.get(yearStr);

      // Si hay datos para este año, usar esos valores, de lo contrario usar ceros
      const impuestoNumerico = mora
        ? mora.IMPUESTO != null
          ? Number(mora.IMPUESTO)
          : 0
        : 0;
      const trenDeAseoNumerico = mora
        ? mora.TREN_DE_ASEO != null
          ? Number(mora.TREN_DE_ASEO)
          : 0
        : 0;
      const tasaBomberosNumerico = mora
        ? mora.TASA_BOMBEROS != null
          ? Number(mora.TASA_BOMBEROS)
          : 0
        : 0;
      const dias = this.calcularDiasVencidos(yearStr);

      // Calcular recargo según la fórmula
      const baseImponible =
        impuestoNumerico + trenDeAseoNumerico + tasaBomberosNumerico;
      const recargoNumerico = (baseImponible * dias * 0.22) / 360;
      const totalNumerico = baseImponible + recargoNumerico;

      // Formatear valores con el símbolo de Lempiras y separadores de miles
      const impuesto = formatoMoneda.format(impuestoNumerico);
      const trenDeAseo = formatoMoneda.format(trenDeAseoNumerico);
      const tasaBomberos = formatoMoneda.format(tasaBomberosNumerico);
      const recargo = formatoMoneda.format(recargoNumerico);
      const total = formatoMoneda.format(totalNumerico);

      detallesMora.push({
        year: yearStr,
        impuesto,
        trenDeAseo,
        tasaBomberos,
        recargo,
        total,
        dias,
        // Guardar valores numéricos para cálculos
        impuestoNumerico,
        trenDeAseoNumerico,
        tasaBomberosNumerico,
        recargoNumerico,
        totalNumerico,
      });
    }

    // Calcular el total general (usando los valores numéricos)
    const totalGeneralNumerico = detallesMora.reduce(
      (sum, detalle) => sum + detalle.totalNumerico,
      0,
    );
    const totalGeneral = formatoMoneda.format(totalGeneralNumerico);

    const mora = registrosMora.length > 0 ? registrosMora[0] : null;

    // Construir la respuesta usando valores por defecto para campos que puedan estar vacíos
    return {
      nombre: mora?.NOMBRE || 'No disponible',
      identidad: mora?.ACT_ID_CARD || 'No disponible',
      claveCatastral: claveCatastral,
      fecha,
      hora,
      colonia: claveRuta.COLONIA || 'No disponible',
      nombreColonia: mora?.NOMBRE_COLONIA || 'No disponible', // Agregando el campo nombreColonia de la tabla MORA
      codigoUmaps: claveRuta.UMAPS != null ? claveRuta.UMAPS : 0,
      ruta: claveRuta.RUTA || 'No disponible',
      detallesMora,
      totalGeneral,
      totalGeneralNumerico,
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
