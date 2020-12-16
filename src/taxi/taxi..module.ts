import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaxiSchema } from './schemas/taxi..schema';
import { TaxisController } from './taxis.controller';
import { TaxisService } from './taxis.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Taxi", schema: TaxiSchema }
        ])
    ],
    controllers: [TaxisController],
    providers: [TaxisService]
})
export class TaxisModule { }