import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 5;

  constructor() {
    super({
      log: [
        { level: 'query', emit: 'event' },
        { level: 'error', emit: 'stdout' },
        { level: 'info', emit: 'stdout' },
        { level: 'warn', emit: 'stdout' },
      ],
    });

    // Log queries en desarrollo (comentar en producción)
    // this.$on('query', (e) => {
    //   console.log('Query: ' + e.query);
    //   console.log('Params: ' + e.params);
    //   console.log('Duration: ' + e.duration + 'ms');
    // });
  }

  async onModuleInit() {
    try {
      this.logger.log('Intentando conectar a la base de datos...');
      await this.$connect();
      this.logger.log('Conexión a la base de datos establecida');
      this.reconnectAttempts = 0;
    } catch (error) {
      this.logger.error(`Error al conectar a la base de datos: ${error.message}`);
      
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        this.logger.log(`Reintentando conexión (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
        
        // Esperar 3 segundos antes de reintentar
        await new Promise(resolve => setTimeout(resolve, 3000));
        return this.onModuleInit();
      } else {
        this.logger.error(`Máximo número de intentos de reconexión alcanzados (${this.maxReconnectAttempts})`);
        throw error;
      }
    }
  }

  async onModuleDestroy() {
    this.logger.log('Cerrando conexión a la base de datos...');
    await this.$disconnect();
    this.logger.log('Conexión a la base de datos cerrada');
  }
}
