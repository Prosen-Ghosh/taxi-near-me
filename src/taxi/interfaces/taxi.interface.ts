import { Document } from "mongoose";

export interface IGeoLocation {
    type: string;
    coordinates: [number]
}
export interface ITaxi extends Document {
    readonly driverName: string;
    readonly phone: string;
    readonly serviceType: string;
    readonly currentLocation: IGeoLocation;
    readonly rating: Number
}