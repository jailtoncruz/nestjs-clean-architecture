import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CloudModule } from '../../../infraestructure/cloud/cloud.module';
import { LoggerModule } from '../../../infraestructure/custom/logger/logger.module';
import { ControllerModule } from '../controller.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CloudModule,
    LoggerModule,
    ControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
