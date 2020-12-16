import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { TaxiSchema } from 'src/taxi/schemas/taxi..schema';
import { TaxisModule } from 'src/taxi/taxi..module';
import { TaxisService } from 'src/taxi/taxis.service';
// import { TaxisService } from 'src/taxi/taxis.service';

import { TaxiSeed } from '../taxi/seeds/taxi.seed';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Taxi", schema: TaxiSchema }
        ]),
        TaxisModule, 
    ],
    providers: [TaxiSeed, TaxisService],
    exports: [TaxiSeed],
})
export class SeedsModule {}