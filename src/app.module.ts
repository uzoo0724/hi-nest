import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// 데코레이터
// 클래스에 함수 기능 추가 가능
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // URL 가져오기, 함수 실행
  providers: [],
})
export class AppModule { }
