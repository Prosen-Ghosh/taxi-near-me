import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { TaxisService } from '../taxis.service';
import { generateTaxi } from './data';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TaxiSeed {
    constructor(
        private readonly taxisService: TaxisService,
        private readonly configService: ConfigService,
    ) { }

    @Command({ command: 'create:bulk-taxi', describe: 'create a list of taxi', autoExit: true })
    async insertMany() {
        const data = Array(this.configService.get('taxiSeeder.generateTaxi')).fill(1).map(v => generateTaxi())
        const taxi = await this.taxisService.insertMany(data);
        // console.log(taxi);
    }

    @Command({ command: 'remove:all-taxi', describe: 'remove list of taxi', autoExit: true })
    async removeAllTaxi() {
        const taxi = await this.taxisService.removeAll();
        // console.log(taxi);
    }
}