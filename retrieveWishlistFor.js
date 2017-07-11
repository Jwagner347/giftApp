const wishlistsFromDataSource = require('./returnWishlistsFromDataSource');

const getWishlist = (wishlists, nameToCheck) => {
  const wishlistsIds = Object.keys(wishlistsFromDataSource('./wishlistDataStore.json').wishlists);
  let existingWishlist;

  wishlistsIds.forEach((wishlistId) => {
    if (wishlists.wishlists[wishlistId].wishlist.name === nameToCheck) {
      existingWishlist = wishlists.wishlists[wishlistId].wishlist.wishlistItems;
    }
    return existingWishlist;
  });
  return existingWishlist;
};

module.exports = (name, wishlists) => {
  const retrievedWishlist = getWishlist(wishlists, name);

  if (!retrievedWishlist) {
    return `No wishlist for ${name} found`;
  }

  return retrievedWishlist;
};
