import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // The root url will be /api
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();
