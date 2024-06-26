import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 3000;

  app.enableCors();
  app.use(cors());
  const config = new DocumentBuilder()
    .setTitle('Digital Bookstore')
    .setDescription('The Digital Bookstore API ')
    .setVersion('1.0')
    .addBearerAuth() // Adds support for Bearer authentication
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.setGlobalPrefix('/api');
  await app.listen(port);
  console.log(`The application is running in: http://localhost:${port}/api\n`);
  console.log(
    `the swagger app is running in: http://localhost:${port}/api/docs`,
  );
}
bootstrap();
