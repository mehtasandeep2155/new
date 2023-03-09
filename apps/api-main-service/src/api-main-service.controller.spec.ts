import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainServiceController } from './api-main-service.controller';
import { ApiMainServiceService } from './api-main-service.service';

describe('ApiMainServiceController', () => {
  let apiMainServiceController: ApiMainServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainServiceController],
      providers: [ApiMainServiceService],
    }).compile();

    apiMainServiceController = app.get<ApiMainServiceController>(ApiMainServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiMainServiceController.getHello()).toBe('Hello World!');
    });
  });
});
