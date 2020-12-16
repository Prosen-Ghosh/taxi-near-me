import { getRandomInt, generateName, generateGeoLocation } from "./lib";

export function generateTaxi() {
    return {
        driverName: generateName(),
        phone: Math.floor(Math.random() * 9000000000) + 1000000000,
        serviceType: ['Premium', 'Normal'][getRandomInt(0, 2)],
        currentLocation: {
            type: 'Point',
            coordinates: generateGeoLocation(23.777176, 90.399452, 5000)
        },
        isAvailable: Math.random() > .3,
        rating: getRandomInt(0, 5)
    }
}