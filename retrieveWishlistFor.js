const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myproject';


module.exports = (name) => {
  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(url, (err, db) => {
        const collection = db.collection('wishlists');
        collection.findOne({ name })
          .then((doc) => {
            db.close();
            resolve(doc.wishlistItems);
          });
      });
    } catch (error) {
      reject(error);
    }
  });
};
