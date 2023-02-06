import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 데코레이터
// 클래스에 함수 기능 추가 가능
@Module({
  imports: [],
  controllers: [AppController], // URL 가져오기, 함수 실행
  providers: [AppService],
})
export class AppModule { }
