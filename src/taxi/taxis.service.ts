import { Injectable } from '@nestjs/common';
import { ITaxi } from './interfaces/taxi.interface';

@Injectable()
export class TaxisService {
    private readonly taxis: ITaxi[] = [];

    findAll(): ITaxi[] {
        return this.taxis;
    }
}