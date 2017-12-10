const { describe, it } = global;
require('promise-matchers');

const saveWishlist = require('../../saveWishlist');

describe('Save Wishlist', () => {
  const validName = 'Jim Bob';
  const validWishlistItems = ['Things', 'I', 'Love'];
  const expectedResult = { n: 1, ok: 1 };

  it('should reject if unable to connect to the db', (done) => {
    const promise = saveWishlist(validWishlistItems, validName, 'wrong://localhost:0000');
    expect(promise).toHaveBeenRejected(done);
  });

  it('should resolve with successful result', (done) => {
    const promise = saveWishlist(validWishlistItems, validName);
    expect(promise).toHaveBeenResolvedWith(done, (result) => {
      expect(result).toEqual(expectedResult);
    });
  });
});
