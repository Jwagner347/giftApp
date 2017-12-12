const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;

module.exports = (wishlistItems, name, url = dbUrl) => {
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
