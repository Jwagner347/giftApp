const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';


module.exports = (name, wishlistItems) => {
  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(url, (err, db) => {
        const collection = db.collection('wishlists');
        collection.findOneAndUpdate({ name }, { $set: { wishlistItems } }, { upsert: true, returnOriginal: false })
          .then((successfulUpdate) => {
            db.close();
            resolve(successfulUpdate);
          });
      });
    } catch (error) {
      reject(error);
    }
  });
};
