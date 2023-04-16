import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/adapter/controller/app.controller';
import { CreateAnimeService } from '../src/application/service/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [CreateAnimeService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.createAnime()).toBe('Hello World!');
    });
  });
});
