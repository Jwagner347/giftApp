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


    // collection.findOneAndUpdate({ name }, { $set: wishlistToSave }, {
    //   returnOriginal: false
    // }, (error, result) => {
    //   console.log('result: ', result);
    // });

  // const wishlistAlreadyExists = (wishlists, nameToCheck) => {
  //   let existingWishlistId;
  //   wishlistsIds.forEach((wishlistId) => {
  //     if (wishlists[`${wishlistId}`].wishlist.name === nameToCheck) {
  //       existingWishlistId = wishlistId;
  //     }
  //   });
  //   return existingWishlistId;
  // };
  // const existingWishlist = wishlistAlreadyExists(parsedDataStoreFile.wishlists, name);
  // if (existingWishlist) {
  //   parsedDataStoreFile.wishlists[`${existingWishlist}`] = {
  //     id: existingWishlist,
  //     wishlist: wishlistToSave
  //   };
  // } else {
  //   const newWishlistNumber = wishlistsIds.length + 1;
  //   parsedDataStoreFile.wishlists[`${newWishlistNumber}`] = {
  //     id: newWishlistNumber,
  //     wishlist: wishlistToSave
  //   };
  // }
  // dataStoreJSON = JSON.stringify(parsedDataStoreFile);
  // fs.writeFileSync('./wishlistDataStore.json', dataStoreJSON);
};
