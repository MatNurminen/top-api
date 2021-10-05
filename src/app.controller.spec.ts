import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubController } from './club/club.controller'
import { ClubService } from './club/club.service'
import { ClubEntity } from './club/club.entity';
import { ClubModule } from './club/club.module'



describe('AppController', () => {
  let appController: AppController;
  let clubController: ClubController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
     // imports: [ClubModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    const club: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([ClubEntity])
    ],
      controllers: [ClubController],
      providers: [ClubService],
    }).compile();

    clubController = club.get<ClubController>(ClubController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(appController.getAllClubs()).toBe('object');
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

// describe('ClubController', () => {
  
//   //console.log('TEST', clubController.findAllClubs());
  
//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       imports: [
//         TypeOrmModule.forFeature([ClubEntity])
//     ],
//       controllers: [ClubController],
//       providers: [ClubService],
//     }).compile();

//     clubController = app.get<ClubController>(ClubController);
//   })

//   describe('club', () => {
//     it('should return clubs', () => {
      
      
//       expect(typeof clubController.findAllClubs()).toBe('object');
//     });
//   });
// })