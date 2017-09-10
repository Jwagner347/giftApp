const url = 'mongodb://localhost:27017/myproject';

const MongoClient = require('mongodb').MongoClient;

module.exports = MongoClient.connect(url, (err, db) => {
  writeToDb({ document, db, nameOfCollection: 'wishlists', callback: () => {
    db.close();
  } });
});