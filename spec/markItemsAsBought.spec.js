const { describe, it } = global;
const assert = require('chai').assert;

const markItemsAsBought = require('../markItemsAsBought');

describe('Mark items as bought', () => {
  const wishlists = {
    wishlists: [
      { name: 'John Smith', wishlistItems: ['Kyocera', 'Yacht', 'Condo'] },
      { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'] },
      { name: 'Fred Durst', wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'] },
    ]
  };

  it('should create new field of bought items in wishlist object', () => {
    assert.deepEqual(markItemsAsBought('John Smith')({ boughtItems: 'Condo', wishlists }), JSON.stringify({
      name: 'John Smith',
      wishlistItems: ['Kyocera', 'Yacht', 'Condo'],
      boughtItems: ['Condo']
    }));
  });

  // TODO: add test for when name doesn't match any name in wishlist object' +
  // TODO: extract wishlist.forEach you are calling in retreive and markItemsAsBought into its own module
});
