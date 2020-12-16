export default () => ({
    port: parseInt(process.env.PORT, 10),
    database: {
        uri: process.env.DB_URI
    },
    userSeeder: {
        currentLat: parseFloat(process.env.CURRENT_LAT),
        currentLong: parseFloat(process.env.CURRENT_LONG),
        findWithInMeter: parseInt(process.env.FIND_TAXI_WITHIN_METER)
    },
    taxiSeeder: {
        generateTaxi: parseInt(process.env.GENERATE_TAXI, 10)
    }
});