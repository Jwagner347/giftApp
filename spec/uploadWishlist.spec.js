const { describe, it } = global;
const assert = require('chai').assert;

const uploadWishlist = require('../uploadWishlist');

describe('Upload Wishlist', () => {
  const emptyWishlist = undefined;
  const singleItemWishlist = ['Pixel'];
  const multipleWishlistItems = ['Kyocera', 'Yacht', 'Condo'];
  const loggedInUser = 'Phil Harmonics';
  const expectedSingleItemWishlist = { wishlistItems: singleItemWishlist, name: loggedInUser };
  const expectedMultipleItemWishlist = { wishlistItems: multipleWishlistItems, name: loggedInUser };
  const expectedMultipleItemNamedWishlist = { wishlistItems: multipleWishlistItems, name: 'Jane Fonda' };

  it('should return one wishlist item', () => {
    assert.deepEqual(uploadWishlist(singleItemWishlist, loggedInUser), expectedSingleItemWishlist);
  });

  it('should return multiple wishlist items', () => {
    assert.deepEqual(uploadWishlist(multipleWishlistItems, loggedInUser), expectedMultipleItemWishlist);
  });

  it('should not accept empty wish list', () => {
    assert.equal(uploadWishlist(emptyWishlist), 'Please include at least one item for your wishlist');
  });

  it('should return wishlist with the name of the wishlist owner', () => {
    assert.deepEqual(uploadWishlist(multipleWishlistItems, 'Jane Fonda'), expectedMultipleItemNamedWishlist);
  });

  it('should return an error when no name is provided', () => {
    assert.equal(uploadWishlist(multipleWishlistItems), 'Wishlist must have a name associated with it');
  });
});
