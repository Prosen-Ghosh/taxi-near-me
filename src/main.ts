import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  
  // The root url will be /api
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(configService.get<number>('port'));
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();
