import * as mongoose from 'mongoose';

export const TaxiSchema = new mongoose.Schema({
    driverName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    serviceType: {
        type: String,
        enum: ['Premium', 'Normal'],
        required: true,
        default: 'Normal'
    },
    currentLocation: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    isAvailable: {
        type: Boolean,
    }
}, {
    timestamps: true,
    versionKey: false
});
TaxiSchema.index({ currentLocation: "2dsphere" });

export const TaxiModel = mongoose.model('Taxi', TaxiSchema);

// This indexing is required for geo special queries
// TaxiModel.createIndexes({ currentLocation: "2dsphere" });