import { Controller, Get, Param, Query } from '@nestjs/common';
import { ITaxi } from './interfaces/taxi.interface';
import { TaxisService } from './taxis.service';

@Controller('taxi')
export class TaxisController {
    constructor(private readonly taxiService: TaxisService) { }
    @Get()
    async search(@Query('search') search: string, @Query('type') serviceType: string): Promise<ITaxi[]> {
        return await this.taxiService.search(search, serviceType);
    }
}