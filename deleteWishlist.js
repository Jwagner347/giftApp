const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myproject';

module.exports = (name) => {

  const deleteWishlist = (db, callback) => {
    console.log('Connected correctly to server');
    const collection = db.collection('wishlists');
    collection.deleteOne({ name }, (err, result) => {
      console.log('Removed the document with the field a equal to 3');
      callback(result);
    });
  };

  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log('error!!', err);
    } else {
      deleteWishlist('myproject', () => {
        console.log(`Successfully deleted wishlist for ${name}!`);
      });
      db.close();
    }
  });
};

