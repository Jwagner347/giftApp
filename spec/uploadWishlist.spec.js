const { describe, it } = global;
const assert = require('chai').assert;

const uploadWishlist = require('../index');

describe('Upload Wishlist', () => {
  const emptyWishlist = undefined;
  const multipleWishlistItems = ['Kyocera', 'Yacht', 'Condo'];
  const user = 'Samwise Gangee';
  const emptyUser = undefined;

  it('should return a user and multiple wishlist items', () => {
    const uploadMultipleItems = uploadWishlist(user, multipleWishlistItems);
    assert.deepEqual(uploadMultipleItems, { user, wishlistItems: multipleWishlistItems });
  });

  it('should not accept empty wish list', () => {
    assert.equal(uploadWishlist(user, emptyWishlist), 'Please include at least one item for your wishlist');
  });

  it('should raise error if no user passed in as argument', () => {
    assert.equal(uploadWishlist(emptyUser, multipleWishlistItems), 'You must specify which user you are uploading a wish list for');
  });
});
