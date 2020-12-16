import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITaxi } from './interfaces/taxi.interface';
@Injectable()
export class TaxisService {
    constructor(@InjectModel('Taxi') private readonly taxiModel: Model<ITaxi>) { }

    async findAll(search: string): Promise<ITaxi[]> {

        return await this.taxiModel.aggregate([
            {}
        ]);
    }

    async insertMany(data: any[]): Promise<any> {
        return await this.taxiModel.insertMany(data);
    }

    async removeAll(): Promise<any> {
        return await this.taxiModel.remove()
    }
}