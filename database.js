const mongoose = require('mongoose');
const debug = require('debug')('db');

const url = 'mongodb://localhost:27017/csg';
let db = null;

async function connectDb() {
  if (db) { return db; }
  await mongoose.connect(url, { useNewUrlParser: true });
  db = mongoose.connection;
  db.on('error', () => {
    debug('connection error:');
    return 0;
  });
  db.once('open', () => {
    debug('Open');
    return db;
  });
  db.on('connected', () => {
    debug('Connected');
    return db;
  });

  return db;
}

module.exports = connectDb;
