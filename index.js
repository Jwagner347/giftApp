module.exports = (user, wishlistItem) => {
  if (user === undefined) {
    return 'You must specify which user you are uploading a wish list for';
  } else if (wishlistItem === undefined) {
    return 'Please include at least one item for your wishlist';
  }
  return { user, wishlistItems: wishlistItem };
};
