const { describe, it } = global;
const assert = require('chai').assert;

const retrieveWishlistFor = require('../../retrieveWishlistFor');

describe('Retrieve wishlist', () => {
  const wishlists = {
    1: {
      id: '1',
      wishlist: { wishlistItems: ['Kyocera', 'Yacht', 'Condo'], name: 'John Smith' }
    },
    2: {
      id: '2',
      wishlist: { wishlistItems: ['Honda', 'Ball Pit'], name: 'Jenny Ford' }
    },
    3: {
      id: '3',
      wishlist: { wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'], name: 'Fred Durst' }
    }
  };

  it('by name should return wishlist with that name', () => {
    assert.deepEqual(retrieveWishlistFor('John Smith')(wishlists), JSON.stringify(['Kyocera', 'Yacht', 'Condo']));
  });

  it('by name should return an error if no name matched', () => {
    assert.deepEqual(retrieveWishlistFor('John Doe')(wishlists), 'No wishlist for John Doe found');
  });
});
