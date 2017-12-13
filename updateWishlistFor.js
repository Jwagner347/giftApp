const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;


module.exports = (name, wishlistItems) => {
  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(dbUrl, (err, db) => {
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
