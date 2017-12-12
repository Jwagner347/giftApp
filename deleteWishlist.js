const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';

module.exports = (name) => {

  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(url, (err, db) => {
        const collection = db.collection('wishlists');
        collection.findOneAndDelete({ name })
          .then((successfulDelete) => {
            db.close();
            resolve(successfulDelete);
          });
      });
    } catch (error) {
      reject(error);
    }
  });
};

