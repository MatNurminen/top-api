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
    .addTag('FreeAgent')
    .addTag('League')
    .addTag('LeagueLogo')
    .addTag('Player')
    .addTag('Roster')
    .addTag('Season')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,UPDATE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    next()
  })

  await app.listen(3002);
}
bootstrap();
