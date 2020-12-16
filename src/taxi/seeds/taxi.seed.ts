import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { TaxisService } from '../taxis.service';
import { generateTaxi } from './data';

@Injectable()
export class TaxiSeed {
    constructor(
        private readonly taxisService: TaxisService,
    ) { }

    @Command({ command: 'create:bulk-taxi', describe: 'create a list of taxi', autoExit: true })
    async insertMany() {
        const data = Array(10000).fill(1).map(v => generateTaxi())
        const taxi = await this.taxisService.insertMany(data);
        // console.log(taxi);
    }

    @Command({ command: 'remove:all-taxi', describe: 'create a list of taxi', autoExit: true })
    async removeAllTaxi() {
        const taxi = await this.taxisService.removeAll();
        // console.log(taxi);
    }
}