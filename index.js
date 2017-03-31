module.exports = (wishlistItems) => {
  if (wishlistItems === undefined) {
    return 'Please include at least one item for your wishlist';
  }
  return JSON.stringify({ wishlistItems: wishlistItems });
};
