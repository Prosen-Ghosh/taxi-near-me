import { ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from 'mongoose';
import { closeInMongodConnection, rootMongooseTestModule } from '../test-utils/mongoose-test-module';
import { TaxiSchema } from './schemas/taxi..schema';
import { TaxisController } from './taxis.controller';
import { TaxisService } from './taxis.service';

describe('TaxisController', () => {
    let taxisController: TaxisController;
    let taxisService: TaxisService;
    let connection: Connection;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [
                rootMongooseTestModule(),
                MongooseModule.forFeature([
                    { name: "Taxi", schema: TaxiSchema }
                ])
            ],
            controllers: [TaxisController],
            providers: [TaxisService, ConfigService],
        }).compile();

        taxisService = moduleRef.get<TaxisService>(TaxisService);
        taxisController = moduleRef.get<TaxisController>(TaxisController);
        connection = await moduleRef.get(getConnectionToken());
    });

    it('should be defined taxi service', () => {
        expect(taxisService).toBeDefined();
    });

    it('should be defined taxi controler', () => {
        expect(taxisController).toBeDefined();
    });

    describe('search', () => {
        it('should return an array of taxis', async () => {
            const result: any = [];
            jest.spyOn(taxisService, 'search').mockImplementation(() => result);

            expect(await taxisController.search("Dahaka", 'all')).toBe(result);
        });
    });

    afterAll(async done => {
        await connection.close();
        await closeInMongodConnection();
        done();
    });
});