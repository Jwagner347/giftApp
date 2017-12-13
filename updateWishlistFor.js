const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;

module.exports = (name, wishlistItems) => {
  return MongoClient.connect(dbUrl)
    .then((db) => {
      const collection = db.collection('wishlists');
      return collection.findOneAndUpdate({ name }, { $set: { wishlistItems } }, { upsert: true, returnOriginal: false })
        .then((successfulUpdate) => {
          db.close();
          return successfulUpdate;
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};
