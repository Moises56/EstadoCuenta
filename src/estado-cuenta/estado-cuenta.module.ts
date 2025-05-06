import { Module } from '@nestjs/common';
import { EstadoCuentaService } from './estado-cuenta.service';
import { EstadoCuentaController } from './estado-cuenta.controller';

@Module({
  controllers: [EstadoCuentaController],
  providers: [EstadoCuentaService],
})
export class EstadoCuentaModule {}
