const retrieveWishlistFor = require('./retrieveWishlistFor');

module.exports = (name) => ({ boughtItems, wishlists }) => {
  let matchedWishlist;
  const newWishlists = wishlists.wishlists.map((wishlistObject) => {
    if (wishlistObject.name === name) {
      wishlistObject.boughtItems = [boughtItems];
    }
    return wishlistObject;
  });

  newWishlists.forEach((wishlist) => {
    if (wishlist.name === name) {
      matchedWishlist = wishlist;
    }
  });

  return JSON.stringify(matchedWishlist);
};
