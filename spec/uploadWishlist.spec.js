const { describe, it } = global;
const assert = require('chai').assert;

const uploadWishlist = require('../index');

describe('Upload Wishlist', () => {
  const emptyWishlist = undefined;
  const multipleWishlistItems = ['Kyocera', 'Yacht', 'Condo'];
  const returnedWishlist = {};

  it('should return multiple wishlist items', () => {
    returnedWishlist.wishlistItems = multipleWishlistItems;
    assert.deepEqual(uploadWishlist(multipleWishlistItems), JSON.stringify(returnedWishlist));
  });

  it('should not accept empty wish list', () => {
    assert.equal(uploadWishlist(emptyWishlist), 'Please include at least one item for your wishlist');
  });

});
