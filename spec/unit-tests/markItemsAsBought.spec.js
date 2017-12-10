const { describe, it, beforeEach } = global;

const markItemsAsBoughtFor = require('../../markItemsAsBoughtFor');

describe('Mark items as bought for', () => {
  let wishlists;
  beforeEach(() => {
    wishlists = [
      { name: 'John Smith', wishlistItems: ['Kyocera', 'Yacht', 'Condo'] },
      { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'] },
      { name: 'Fred Durst', wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'] }
    ];
  });

  it('should create new field of bought items in wishlist object', () => {
    expect(markItemsAsBoughtFor('John Smith')({ boughtItems: ['Condo'], wishlists })).toBe(JSON.stringify({
      name: 'John Smith',
      wishlistItems: ['Kyocera', 'Yacht', 'Condo'],
      boughtItems: ['Condo']
    }));
  });

  it('should complain if the name is not in the wishlist object you are searching through', () => {
    expect(markItemsAsBoughtFor('Jim Nonexistent')({ boughtItems: ['Condo'], wishlists })).toBe('No wishlists exist for Jim Nonexistent');
  });

  it('should mark multiple items as bought', () => {
    expect(markItemsAsBoughtFor('Fred Durst')({ boughtItems: ['fishing boat', 'Thigh-master'], wishlists })).toBe(JSON.stringify({
      name: 'Fred Durst',
      wishlistItems: ['Samsung', 'fishing boat', 'Thigh-master'],
      boughtItems: ['fishing boat', 'Thigh-master']
    }));
  });

  it('should do nothing if item already marked as bought', () => {
    const wishlistWithMarkedItems = [
      { name: 'Jenny Ford', wishlistItems: ['Honda', 'Ball Pit'], boughtItems: ['Ball Pit'] }
    ];
    expect(markItemsAsBoughtFor('Jenny Ford')({ boughtItems: ['Ball Pit'], wishlists: wishlistWithMarkedItems })).toBe(JSON.stringify({
      name: 'Jenny Ford',
      wishlistItems: ['Honda', 'Ball Pit'],
      boughtItems: ['Ball Pit']
    }));
  });

  it('should not overwrite bought items inadvertently', () => {
    const name = 'Samwise Ganges';
    const wishlistItems = ['Bread', 'Potatoes', 'Flax', 'Turnips', 'Collard Greens'];
    const wishlistWithMultipleMarkedItems = [
      { name, wishlistItems, boughtItems: ['Bread', 'Potatoes'] }
    ];
    expect(markItemsAsBoughtFor(name)({ boughtItems: ['Flax', 'Collard Greens'], wishlists: wishlistWithMultipleMarkedItems })).toBe(
      JSON.stringify({
        name,
        wishlistItems,
        boughtItems: ['Bread', 'Potatoes', 'Flax', 'Collard Greens']
      }));
  });
});
