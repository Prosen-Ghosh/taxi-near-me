export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: process.env.DB_URI,
    userSeeder: {
        currentLat: process.env.CURRENT_LAT,
        currentLong: process.env.CURRENT_LONG,
        findWithInMeter: process.env.FIND_TAXI_WITHIN_METER
    },
    taxiSeeder: {
        generateTaxi: parseInt(process.env.GENERATE_TAXI)
    }
});