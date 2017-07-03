const { describe, it } = global;
const assert = require('chai').assert;

const retrieveWishlistFor = require('../../retrieveWishlistFor');

describe('Retrieve wishlist', () => {
  const wishlists = {
    wishlists: [
      { name: 'John Smith', wishlistItems: ['Kyocera', 'Yacht', 'Condo'] },
      { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'] },
      { name: 'Fred Durst', wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'] }
    ]
  };

  it('by name should return wishlist with that name', () => {
    assert.deepEqual(retrieveWishlistFor('John Smith')(wishlists), JSON.stringify(['Kyocera', 'Yacht', 'Condo']));
  });

  it('by name should return an error if no name matched', () => {
    assert.deepEqual(retrieveWishlistFor('John Doe')(wishlists), 'No wishlist for John Doe found');
  });
});
