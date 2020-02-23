const mongoose = require('mongoose');


const { Schema } = mongoose;

const CpuSchema = new Schema({
    timeStamp:{type: Date},
    total: { type: Number },
    free: { type: Number }
}, {
  versionKey: false, // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Cpu', CpuSchema);