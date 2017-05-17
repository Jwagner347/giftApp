module.exports = (name) => ({ boughtItems = [], wishlists }) => {
  let matchedWishlist;
  let matchCount = 0;
  const addBoughtItemsToWishlists = wishlists.map((wishlistObject) => {
    if (wishlistObject.name === name) {
      matchCount += 1;
      if (wishlistObject.boughtItems && wishlistObject.boughtItems.length && boughtItems) {
        boughtItems.forEach((item) => { // eslint-disable-line consistent-return
          if (!wishlistObject.boughtItems.includes(item)) {
            return wishlistObject.boughtItems.push(item);
          }
        });
      } else {
        wishlistObject.boughtItems = boughtItems; // eslint-disable-line no-param-reassign
      }
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
