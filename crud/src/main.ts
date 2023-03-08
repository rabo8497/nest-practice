import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  //staticAssets을 현재폴더(dirname)에서 한칸 상위('..')에 있는 public폴더로 지정한다.
  app.useStaticAssets(join(__dirname, '..', 'public'));
  //view폴더를 현재폴더(dirname)에서 한칸 상위('..')에 있는 views폴더로 지정한다.
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
