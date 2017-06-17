const fs = require('fs');

module.exports = (wishlistItems, name) => {
  if (!wishlistItems) {
    return 'Please include at least one item for your wishlist';
  }

  if (!name) {
    return 'Wishlist must have a name associated with it';
  }

  const successfulWishlistUpload = { wishlistItems, name };
  let dataStoreFile;
  let parsedDataStoreFile;
  let dataStoreJSON;

  if (!fs.existsSync('./wishlistDataStore.json')) {
    fs.writeFileSync('./wishlistDataStore.json', JSON.stringify([successfulWishlistUpload]));
  } else {
    dataStoreFile = fs.readFileSync('./wishlistDataStore.json');
    parsedDataStoreFile = JSON.parse(dataStoreFile);
    parsedDataStoreFile.push({
      wishlistItems,
      name
    });
    dataStoreJSON = JSON.stringify(parsedDataStoreFile);
    fs.writeFileSync('./wishlistDataStore.json', dataStoreJSON);
  }

  return successfulWishlistUpload;
};
