const fs = require('fs');

module.exports = (wishlistItems, name) => {
  const wishlistToSave = { wishlistItems, name };
  let dataStoreFile;
  let parsedDataStoreFile;
  let dataStoreJSON;

  if (!fs.existsSync('./wishlistDataStore.json')) {
    fs.writeFileSync('./wishlistDataStore.json', JSON.stringify({
      wishlists: {
        1: {
          id: 1,
          wishlist: wishlistToSave
        }
      }
    }));
  } else {
    dataStoreFile = fs.readFileSync('./wishlistDataStore.json');
    parsedDataStoreFile = JSON.parse(dataStoreFile);
    const wishlistsIds = Object.keys(parsedDataStoreFile.wishlists);
    const newWishlistNumber = wishlistsIds.length + 1;
    parsedDataStoreFile.wishlists[`${newWishlistNumber}`] = {
      id: newWishlistNumber,
      wishlist: wishlistToSave
    };
    dataStoreJSON = JSON.stringify(parsedDataStoreFile);
    fs.writeFileSync('./wishlistDataStore.json', dataStoreJSON);
  }
};
