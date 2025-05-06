import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadoCuentaModule } from './estado-cuenta/estado-cuenta.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, EstadoCuentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
