import { Controller, Get, Param } from '@nestjs/common';
import { ITaxi } from './interfaces/taxi.interface';
import { TaxisService } from './taxis.service';

@Controller('taxi')
export class TaxisController {
    constructor(private readonly taxiService: TaxisService) { }
    @Get(':search')
    async findAll(@Param('search') search: string): Promise<ITaxi[]> {
        return this.taxiService.findAll(search);
    }
}