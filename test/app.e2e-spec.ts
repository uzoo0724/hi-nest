import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // main과 같이, 실제 앱 환경과 동일하게 할 것!
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }));
    await app.init();
  });


  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    // expect(200) == 서버가 요청 처리 완료
    // expect(201) == 요청 성공적, post 되었다는 응답
    // expect(404) == 요청한 리소스가 존재하지 않음, NotFound
    // expect(405) == 현재 리소스에 맞지 않는 메소드 사용, MethodNotAllowed

    it('GET', () => {
      return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .expect([]);
    });

    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: "Test",
          year: 2000,
          genres: ['test']
        })
        .expect(201);
    })

    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: "Test",
          year: 2000,
          genres: ['test'],
          other: "thing"
        })
        .expect(400);
    })

    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete('/movies')
        .expect(404);
    })
  });

  describe('/movies/:id', () => {
    // todo() == 쓰고 싶은 메소드 작성

    // it.todo('GET');
    it('GET 200', () => {
      return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200);
    });

    it('GET 404', () => {
      return request(app.getHttpServer())
        .get('/movies/999')
        .expect(404);
    });

    // it.todo('PATCH');
    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({
          title: "Updated Test"
        })
        .expect(200);
    });

    // it.todo('DELETE');
    it('DELETE 200', () => {
      return request(app.getHttpServer())
        .delete('/movies/1')
        .expect(200);
    });
  })

});
