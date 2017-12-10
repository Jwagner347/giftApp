const saveWishlist = require('./saveWishlist');

module.exports = (wishlistItems, name) => {

  if (!Array.isArray(wishlistItems) || !wishlistItems.length) {
    throw new Error('Wishlist items must be an array with at least one item');
  }

  if (typeof name !== 'string' || !name) {
    throw new Error('Name must be a string of at least one character in length');
  }

  return saveWishlist(wishlistItems, name);
};
