const mongoose = require('mongoose');


const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, {
  versionKey: false, // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('User', UserSchema, 'feedback');