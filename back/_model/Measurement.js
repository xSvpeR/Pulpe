'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//todo Enum to measurement
const MeasurementSchema = new Schema({
  name: {
    type: String,
    enum: [
      'HIP',
      'WAIST',
      'CHEST',
      'SHOULDERS',
      'BASIN',
      'RIGHT_ARM',
      'LEFT_ARM',
      'RIGHT_CALF',
      'LEFT_CALF',
      'THIGH_LEFT',
      'THIGH_RIGHT',
      'WEIGHT',
      'SIZE'
    ]
  },
  unit: {
    type: String,
    enum: ['CM', 'M', 'KG'],
    default: 'M'
  },
  value: Number,
  updatedAt: Date,
  createdAt: Date,
});

// on every save, add the date
MeasurementSchema.pre('save', function (next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt)
    this.createdAt = currentDate;
  next();
});

const Measurement = mongoose.model('Measurement', MeasurementSchema, 'Measurements');

module.exports = Measurement;