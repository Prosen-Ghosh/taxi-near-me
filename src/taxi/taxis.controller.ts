import { Controller, Get } from '@nestjs/common';

@Controller('taxi')
export class TaxisController {
    @Get()
    findAll(): string {
        return 'This action returns all taxi';
    }
}