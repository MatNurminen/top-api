import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Hockey REST API')
    .setDescription('The hockey API description')
    .setVersion('1.0')
    .addTag('Champ')
    .addTag('Championship')
    .addTag('Club')
    .addTag('ClubLogo')
    .addTag('Country')
    .addTag('League')
    .addTag('LeagueLogo')
    .addTag('Player')
    .addTag('Season')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
