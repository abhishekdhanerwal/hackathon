const mongoose = require('mongoose');


const { Schema } = mongoose;

const CpuSchema = new Schema({
    timeStamp:{type: Date},
    Status: { type: String }
}, {
  versionKey: false, // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Task', CpuSchema, 'Tasks');