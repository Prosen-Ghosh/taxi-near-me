import { getRandomInt, generateName } from "./lib";

export function generateTaxi() {
    return {
        driverName: generateName(),
        phone: Math.floor(Math.random() * 9000000000) + 1000000000,
        serviceType: ['Premium', 'Normal'][getRandomInt(0, 1)],
        currentLocation: {
            type: 'Point',
            coordinates: [(Math.random() * 360 - 180).toFixed(8), (Math.random() * 180 - 90).toFixed(8)]
        },
        rating: getRandomInt(0, 5)
    }
}