const { describe, it } = global;
const assert = require('chai').assert;

const uploadWishlist = require('../uploadWishlist');

describe('Upload Wishlist', () => {
  const emptyWishlist = undefined;
  const singleItemWishlist = ['Pixel'];
  const multipleWishlistItems = ['Kyocera', 'Yacht', 'Condo'];
  const expectedSingleItemWishlist = { wishlistItems: singleItemWishlist, name: '' };
  const expectedMultipleItemWishlist = { wishlistItems: multipleWishlistItems, name: '' };
  const expectedMultipleItemNamedWishlist = { wishlistItems: multipleWishlistItems, name: 'Jane Fonda' };

  it('should return one wishlist item', () => {
    assert.deepEqual(uploadWishlist(singleItemWishlist), JSON.stringify(expectedSingleItemWishlist));
  });

  it('should return multiple wishlist items', () => {
    assert.deepEqual(uploadWishlist(multipleWishlistItems), JSON.stringify(expectedMultipleItemWishlist));
  });

  it('should not accept empty wish list', () => {
    assert.equal(uploadWishlist(emptyWishlist), 'Please include at least one item for your wishlist');
  });

  it('should return wishlist with the name of the wishlist owner', () => {
    assert.deepEqual(uploadWishlist(multipleWishlistItems, 'Jane Fonda'), JSON.stringify(expectedMultipleItemNamedWishlist));
  });
});
