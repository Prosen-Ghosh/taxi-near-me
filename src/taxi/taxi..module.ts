import { Module } from '@nestjs/common';
import { TaxisController } from './taxis.controller';
import { TaxisService } from './taxis.service';

@Module({
    controllers: [TaxisController],
    providers: [TaxisService],
})
export class TaxisModule { }