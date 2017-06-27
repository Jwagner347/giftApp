const saveWishlist = require('./saveWishlist');

module.exports = (wishlistItems, name) => {
  if (!wishlistItems) {
    return 'Please include at least one item for your wishlist';
  }

  if (!name) {
    return 'Wishlist must have a name associated with it';
  }

  saveWishlist(wishlistItems, name);

  return { wishlistItems, name };
};
