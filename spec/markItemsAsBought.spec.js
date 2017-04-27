const { describe, it, beforeEach } = global;
const assert = require('chai').assert;

const markItemsAsBoughtFor = require('../markItemsAsBoughtFor');

describe('Mark items as bought for', () => {
  let wishlists;
  beforeEach(() => {
    wishlists = [
      { name: 'John Smith', wishlistItems: ['Kyocera', 'Yacht', 'Condo'] },
      { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'] },
      { name: 'Fred Durst', wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'] },
    ];
  });

  it('should create new field of bought items in wishlist object', () => {
    assert.equal(markItemsAsBoughtFor('John Smith')({ boughtItems: ['Condo'], wishlists }), JSON.stringify({
      name: 'John Smith',
      wishlistItems: ['Kyocera', 'Yacht', 'Condo'],
      boughtItems: ['Condo']
    }));
  });

  it('should complain if the name is not in the wishlist object you are searching through', () => {
    assert.equal(markItemsAsBoughtFor('Jim Nonexistent')({ boughtItems: ['Condo'], wishlists }), 'No wishlists exist for Jim Nonexistent');
  });

  it('should mark multiple items as bought', () => {
    assert.equal(markItemsAsBoughtFor('Fred Durst')({ boughtItems: ['fishing boat', 'Thigh-master'], wishlists }), JSON.stringify({
      name: 'Fred Durst',
      wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'],
      boughtItems: ['fishing boat', 'Thigh-master']
    }));
  });

  it('should do nothing if item already marked as bought', () => {
    const wishlistWithMarkedItems = [
      { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'], boughtItems: ['Ball Pit'] }
    ];
    assert.equal(markItemsAsBoughtFor('Jenny Ford')({ boughtItems: ['Ball Pit'], wishlists: wishlistWithMarkedItems }), JSON.stringify({
      name: 'Jenny Ford',
      wishlistItems: ['Honda', 'Ball Pit'],
      boughtItems: ['Ball Pit']
    }));
  });

  fit('should not overwrite bought items inadvertently', () => {
    const name = 'Samwise Ganges';
    const wishlistItems = ['Bread', 'Potatoes', 'Flax', 'Turnips', 'Collard Greens'];
    const wishlistWithMultipleMarkedItems = [
      { name, wishlistItems, boughtItems: ['Bread', 'Potatoes'] }
    ];
    assert.equal(markItemsAsBoughtFor(name)({ boughtItems: ['Flax', 'Collard Greens'], wishlists: wishlistWithMultipleMarkedItems }), JSON.stringify({
      name,
      wishlistItems,
      boughtItems: ['Bread', 'Potatoes', 'Flax', 'Collard Greens']
    }));
  });

  // TODO: extract wishlist.forEach you are calling in retreive and markItemsAsBought into its own module
  // TODO: clean up eslinting errors or figure out how you want to handle if to use airbnb base

});
