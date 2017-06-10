module.exports = (wishlistItems, name) => {
  if (wishlistItems === undefined) {
    return 'Please include at least one item for your wishlist';
  }

  if (!name) {
    return 'Wishlist must have a name associated with it';
  }

  return JSON.stringify({ wishlistItems, name });
};
