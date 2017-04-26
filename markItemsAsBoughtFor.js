module.exports = (name) => ({ boughtItems = [], wishlists }) => {
  let matchedWishlist;
  let matchCount = 0;
  const addBoughtItemsToWishlists = wishlists.map((wishlistObject) => {
    if (wishlistObject.name === name) {
      matchCount++;
      wishlistObject.boughtItems = boughtItems;
    }
    return wishlistObject;
  });

  if (matchCount === 0) {
    return `No wishlists exist for ${name}`;
  }

  addBoughtItemsToWishlists.forEach((wishlist) => {
    if (wishlist.name === name) {
      matchedWishlist = wishlist;
    }
  });

  return JSON.stringify(matchedWishlist);
};
