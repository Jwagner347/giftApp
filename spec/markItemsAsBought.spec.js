const { describe, it, beforeEach } = global;
const assert = require('chai').assert;

const markItemsAsBought = require('../markItemsAsBought');

describe('Mark items as bought', () => {
  let wishlists;
  beforeEach(() => {
    wishlists = {
      wishlists: [
        { name: 'John Smith', wishlistItems: ['Kyocera', 'Yacht', 'Condo'] },
        { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'] },
        { name: 'Fred Durst', wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'] },
      ]
    };
  });

  it('should create new field of bought items in wishlist object', () => {
    assert.deepEqual(markItemsAsBought('John Smith')({ boughtItems: 'Condo', wishlists }), JSON.stringify({
      name: 'John Smith',
      wishlistItems: ['Kyocera', 'Yacht', 'Condo'],
      boughtItems: ['Condo']
    }));
  });

  it('should complain if the name is not in the wishlist object you are searching through', () => {
    assert.deepEqual(markItemsAsBought('Jim Nonexistent')({ boughtItems: 'Condo', wishlists }), 'No wishlists exist for Jim Nonexistent');
  });

  // TODO: add test for when name doesn't match any name in wishlist object' +
  // TODO: add test for when marking multiple items as bought
  // TODO: add test for when bought items already exists
  // TODO: extract wishlist.forEach you are calling in retreive and markItemsAsBought into its own module
  // TODO: clean up eslinting errors or figure out how you want to handle if to use airbnb base

});
