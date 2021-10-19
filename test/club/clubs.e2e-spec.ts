import { HttpStatus, INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configService } from '../../src/config/config.service'
import { ClubModule } from '../../src/club/club.module'
import { ClubDTO } from '../../src/club/dto/club.dto'
import * as request from 'supertest'
import * as faker from 'faker'
import { ClubService } from '../../src/club/club.service'

const club = {
    league_id: 1,
    club: 'Club 19.10',
    start_year: 2021,
    //end_year: 2021,
}

let test_club_id: number

describe('[Feature] Clubs - /clubs', () => {
    
    let app: INestApplication
    
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                ClubModule,
                TypeOrmModule.forRoot(configService.getTypeOrmConfig())
            ],
        })
        .compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    it('Create [POST /]', async () => {
        return request(app.getHttpServer())
            .post('/club')
            .send(club as ClubDTO)
            .expect(HttpStatus.CREATED)
            .then(({ body }) => {
                expect(body['club']).toEqual(club.club)
                test_club_id = body['club_id']
            })
    })
    it('Get all clubs [GET /]', async () => {
        return request(app.getHttpServer())
            .get('/club')
            .then((res) => {
                expect(typeof res.body).toBe('object')
                expect(res.status).toBe(200)
                expect(typeof res.body[0]['club']).toBe('string')
                //console.log(ClubDTO);
                
            }) 
    })
    it('Get club by id [GET /:club_id]', async () => {
        return request(app.getHttpServer())
            .get('/club/' + test_club_id)
            .then((res) => {
                expect(typeof res.body).toBe('object')
                expect(res.status).toBe(200)
                expect(res.body.length).toBeUndefined()
            })
    })
    it('Update one [PATCH /:club_id]', async () => {
        const mockData = { "club": faker.address.city() }

        return request(app.getHttpServer())
            //.get('/club' + test_club_id)
            .patch('/club/' + test_club_id)
            .send(mockData)
            .then((res) => {
                expect(res.body.club).toBe(mockData.club)
                //request(app.getHttpServer())
            })
    })
    
    it('Delete club by id [DELETE /:club_id]', async () => {
        return request(app.getHttpServer())
            .del('/club/' + test_club_id)
            .then((res) => {
                expect(res.status).toBe(200)        
            })
        
     })

    afterAll(async () => {
        await app.close()
    })
})
