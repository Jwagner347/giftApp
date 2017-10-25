const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myproject';


module.exports = (wishlistItems, name) => {

  return new Promise((resolve, reject) => {
    try {
      MongoClient.connect(url, (err, db) => {
        const collection = db.collection('wishlists');
        collection.insertOne({ wishlistItems, name })
          .then((doc) => {
            console.log(`inserted doc is: ${doc}`);
            db.close();
            resolve(doc);
          });
      });
    } catch (error) {
      reject(error);
    }
  });
};
