const { describe, it } = global;
const assert = require('chai').assert;

const retrieveWishlistFor = require('../../retrieveWishlistFor');

// commented out until i get test data set up
xdescribe('Retrieve wishlist', () => {
  it('by name should return wishlist with that name', () => {
    assert.deepEqual(retrieveWishlistFor('John Smith'), (['Kyocera', 'Yacht', 'Condo']));
  });

  it('by name should return an error if no name matched', () => {
    assert.deepEqual(retrieveWishlistFor('John Doe'), 'No wishlist for John Doe found');
  });
});
