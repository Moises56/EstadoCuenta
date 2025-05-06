export class DetalleMoraDto {
  year: string;
  impuesto: string; // Formateado como moneda (L)
  trenDeAseo: string; // Formateado como moneda (L)
  tasaBomberos: string; // Formateado como moneda (L)
  recargo: string; // Formateado como moneda (L)
  total: string; // Formateado como moneda (L)
  dias: number;

  // Valores numéricos para cálculos internos
  impuestoNumerico: number;
  trenDeAseoNumerico: number;
  tasaBomberosNumerico: number;
  recargoNumerico: number;
  totalNumerico: number;
}

export class EstadoCuentaResponseDto {
  nombre: string;
  identidad: string;
  claveCatastral: string;
  fecha: string;
  hora: string;
  colonia: string;
  nombreColonia: string; // Nombre de la colonia de la tabla MORA
  codigoUmaps: number;
  ruta: string;
  detallesMora: DetalleMoraDto[];
  totalGeneral: string; // Formateado como moneda (L)
  totalGeneralNumerico: number; // Valor numérico para cálculos
}
