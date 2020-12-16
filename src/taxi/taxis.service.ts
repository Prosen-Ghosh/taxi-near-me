import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITaxi } from './interfaces/taxi.interface';
import { generateGeoLocation } from './seeds/lib';
@Injectable()
export class TaxisService {
    constructor(@InjectModel('Taxi') private readonly taxiModel: Model<ITaxi>) { }

    async findAll(search: string): Promise<ITaxi[]> {

        const userFackLocation = generateGeoLocation(23.777176, 90.399452, 500)
        const data = await this.taxiModel.aggregate([
            {
                $geoNear: {
                   near: { type: "Point", coordinates: userFackLocation },
                   distanceField: "dist.calculated",
                   minDistance: 0,
                   maxDistance: 500,
                   query: { isAvailable: true },
                   spherical: true
                }
              }
        ]);
        return data
    }

    async insertMany(data: any[]): Promise<any> {
        return await this.taxiModel.insertMany(data);
    }

    async removeAll(): Promise<any> {
        return await this.taxiModel.deleteMany()
    }
}