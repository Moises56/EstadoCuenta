export class DetalleMoraDto {
  year: string;
  impuesto: number;
  trenDeAseo: number;
  tasaBomberos: number;
  recargo: number;
  total: number;
  dias: number;
}

export class EstadoCuentaResponseDto {
  nombre: string;
  identidad: string;
  claveCatastral: string;
  fecha: string;
  hora: string;
  colonia: string;
  codigoUmaps: number;
  ruta: string;
  detallesMora: DetalleMoraDto[];
  totalGeneral: number;
}
