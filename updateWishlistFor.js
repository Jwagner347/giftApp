const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;

module.exports = (name, wishlistItems) => {
  if (!Array.isArray(wishlistItems) || !wishlistItems.length) {
    throw new Error('Wishlist items must be an array with at least one item');
  }

  if (typeof name !== 'string' || !name) {
    throw new Error('Name must be a string of at least one character in length');
  }

  return MongoClient.connect(dbUrl)
    .then((db) => {
      const collection = db.collection('wishlists');
      return collection.findOneAndUpdate({ name }, { $set: { wishlistItems } }, { returnOriginal: false })
        .then((result) => {
          db.close();
          return result;
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};
