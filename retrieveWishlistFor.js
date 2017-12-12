const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;


module.exports = (name) => {
  return MongoClient.connect(dbUrl)
    .then((db) => {
      const collection = db.collection('wishlists');
      return collection.findOne({ name })
        .then((doc) => {
          let wishlistItems;
          db.close();
          if (!doc) {
            wishlistItems = [];
          } else {
            wishlistItems = doc.wishlistItems;
          }
          return wishlistItems;
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};
