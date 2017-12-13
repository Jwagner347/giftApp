const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;

module.exports = (name) => {
  return MongoClient.connect(dbUrl)
    .then((db) => {
      const collection = db.collection('wishlists');
      return collection.findOneAndDelete({ name })
        .then((result) => {
          db.close();
          return result;
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

