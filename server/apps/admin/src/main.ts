import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('后台管理API')
    .setDescription('供后台管理系统调用的服务端API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = process.env.ADMIN_PORT || 3010;
  await app.listen(PORT);
  global.console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
