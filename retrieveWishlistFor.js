module.exports = (name) => ({ wishlists }) => {
  let matchedWishlist;

  wishlists.forEach((wishlist, index) => {
    if (wishlist.name === name) {
      matchedWishlist = wishlist.wishlistItems;
    }
  });

  if (matchedWishlist === undefined) {
    return `No wishlist for ${name} found`;
  }

  return JSON.stringify(matchedWishlist);
};
