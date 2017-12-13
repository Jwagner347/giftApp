const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;

module.exports = (name) => {

  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(dbUrl, (err, db) => {
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

