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
    const wishlistAlreadyExists = (wishlists, nameToCheck) => {
      let existingWishlistId;
      wishlistsIds.forEach((wishlistId) => {
        if (wishlists[`${wishlistId}`].wishlist.name === nameToCheck) {
          existingWishlistId = wishlistId;
        }
      });
      return existingWishlistId;
    };
    const existingWishlist = wishlistAlreadyExists(parsedDataStoreFile.wishlists, name);
    if (existingWishlist) {
      parsedDataStoreFile.wishlists[`${existingWishlist}`] = {
        id: existingWishlist,
        wishlist: wishlistToSave
      };
    } else {
      const newWishlistNumber = wishlistsIds.length + 1;
      parsedDataStoreFile.wishlists[`${newWishlistNumber}`] = {
        id: newWishlistNumber,
        wishlist: wishlistToSave
      };
    }
    dataStoreJSON = JSON.stringify(parsedDataStoreFile);
    fs.writeFileSync('./wishlistDataStore.json', dataStoreJSON);
  }
};
