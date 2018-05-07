const { describe, it } = global;

const uploadWishlist = require('../../uploadWishlist');

describe('Upload Wishlist', () => {
  const undefinedWishlist = undefined;
  const singleItemWishlist = ['Pixel'];
  const multipleWishlistItems = ['Kyocera', 'Yacht', 'Condo'];
  const validName = 'Jim Bob';
  const validWishlistItems = ['Things', 'I', 'Love'];
  const singleItemUser = 'Phil Harmonics';
  const multipleItemUser = 'Big D';
  const wishlistItemsObject = { foo: 'bar' };
  const wishlistItemsString = 'Milk, Honey';
  const invalidName = { fiz: 'baz' };
  const emptyStringName = '';
  const emptyWishlistItems = [];


  it('should throw an error if wishlist items is an object and not an array', () => {
    expect(() => { uploadWishlist(wishlistItemsObject, validName); }).toThrow('Wishlist items must be an array with at least one item');
  });

  it('should throw an error if wishlist items is a string', () => {
    expect(() => { uploadWishlist(wishlistItemsString, validName); }).toThrow('Wishlist items must be an array with at least one item');
  });

  it('should throw an error if name is not a string', () => {
    expect(() => { uploadWishlist(validWishlistItems, invalidName); }).toThrow('Name must be a string of at least one character in length');
  });

  it('should throw an error if name is empty string', () => {
    expect(() => {
      uploadWishlist(validWishlistItems, emptyStringName);
    }).toThrow('Name must be a string of at least one character in length');
  });

  it('should throw an error when no name is provided', () => {
    expect(() => {
      uploadWishlist(validWishlistItems);
    }).toThrow('Name must be a string of at least one character in length');
  });

  it('should throw an error if wishlistItems is empty array', () => {
    expect(() => { uploadWishlist(emptyWishlistItems, validName); }).toThrow('Wishlist items must be an array with at least one item');
  });

  it('should throw an error if wishlistItems is undefined', () => {
    expect(() => { uploadWishlist(undefinedWishlist, validName); }).toThrow('Wishlist items must be an array with at least one item');
  });

  it('should return one wishlist item', (done) => {
    uploadWishlist(singleItemWishlist, singleItemUser)
      .then((result) => {
        expect(result.ok).toEqual(1);
        done();
      });
  });

  it('should return multiple wishlist items', (done) => {
    uploadWishlist(multipleWishlistItems, multipleItemUser)
      .then((result) => {
        expect(result.ok).toEqual(1);
        done();
      });
  });
});
