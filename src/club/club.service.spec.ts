import { NotFoundException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Connection, Repository } from 'typeorm'
import { ClubEntity } from './club.entity'
import { ClubService } from './club.service'

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>
const createMockRepository = <T = any>(): MockRepository<T> => ({
    find: jest.fn(),
    findOne: jest.fn()
})

describe('ClubService', () => {
    let service: ClubService
    let clubRepository: MockRepository

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ClubService, 
                { provide: Connection, useValue: {} },
                { provide: getRepositoryToken(ClubEntity), useValue: createMockRepository() }
            ],
        }).compile()

        service = module.get<ClubService>(ClubService)
        clubRepository = module.get<MockRepository>(getRepositoryToken(ClubEntity))
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    // describe('findAll', () => {
    //     it('should return the clubs objects', async () => {
    //         const expectedClubs = {}
    //         clubRepository.findOne.mockReturnValue(expectedClubs)
    //         const clubs = await service.findAllClubs()
    //         expect(clubs).toEqual(expectedClubs)
    //     })
    // })

    describe('findOne', () => {
        describe('when club with ID exists', () => {
            it('should return the club object', async () => {
                const club_id = 1
                const expectedClub = {}
                clubRepository.findOne.mockReturnValue(expectedClub)
                const club = await service.findClubById(club_id)
                expect(club).toEqual(expectedClub)
            })
        })
        describe('otherwise', () => {
            it('should throw the "NotFoundException"', async () => {
                const club_id = 1
                clubRepository.findOne.mockReturnValue(undefined)

                 try {
                     await service.findClubById(club_id)
                 } catch (err) {
                     expect(err).toBeInstanceOf(NotFoundException)
                     expect(err.message).toEqual(`Club #${club_id} not found`)
                 }
            })
        })
    })
})
