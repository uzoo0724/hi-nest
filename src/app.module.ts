import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// 데코레이터
// 클래스에 함수 기능 추가 가능
@Module({
  imports: [],
  controllers: [MoviesController], // URL 가져오기, 함수 실행
  providers: [],
})
export class AppModule { }
