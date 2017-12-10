const MongoClient = require('mongodb').MongoClient;

module.exports = (wishlistItems, name, url = 'mongodb://localhost:27017/myproject') => {

  return MongoClient.connect(url)
    .then((db) => {
      const collection = db.collection('wishlists');
      return collection.insertOne({ wishlistItems, name })
        .then(({ result }) => {
          db.close();
          return result;
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};
