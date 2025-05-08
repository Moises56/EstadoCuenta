import { Module } from '@nestjs/common';
import { EstadoCuentaService } from './estado-cuenta.service';
import { EstadoCuentaController } from './estado-cuenta.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { LogModule } from '../logs/log.module';

@Module({
  imports: [PrismaModule, LogModule],
  controllers: [EstadoCuentaController],
  providers: [EstadoCuentaService],
})
export class EstadoCuentaModule {}
