const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/myproject';


module.exports = (wishlistItems, name) => {

  const newWishlist = ({ document, db, nameOfCollection, callback }) => {
    const collection = db.collection(nameOfCollection);
    collection.insertOne(document, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  };

  const wishlistToSave = { wishlistItems, name };

  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log('error!! ', err);
    } else {
      newWishlist({ document: wishlistToSave,
        db,
        nameOfCollection: 'wishlists',
        callback: () => {
          console.log(`Successfully created new wishlist for ${name}!`);
        }
      });
      db.close();
    }
  });
};
