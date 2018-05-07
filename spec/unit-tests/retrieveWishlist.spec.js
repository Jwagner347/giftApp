const { describe, it } = global;

const retrieveWishlistFor = require('../../retrieveWishlistFor');

describe('Retrieve wishlist', () => {
  it('by name should return wishlist with that name', (done) => {
    retrieveWishlistFor('John Smith')
      .then((wishlistItems) => {
        expect(wishlistItems).toEqual(['Kyocera', 'Yacht', 'Condo']);
        done();
      })
      .catch((error) => {
        console.log(`TEST FAILURE! ${error}`);
        expect(false).toBe(true);
        done();
      });
  });

  it('by name should return an empty array if no name matched', (done) => {
    retrieveWishlistFor('John Doe')
      .then((wishlistItems) => {
        expect(wishlistItems).toEqual(null);
        done();
      })
      .catch((error) => {
        console.log(`TEST FAILURE! ${error}`);
        expect(false).toBe(true);
        done();
      });
  });
});
