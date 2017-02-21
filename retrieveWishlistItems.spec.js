const assert = require('assert');
const retrieveWishlistItems = require('./retrieveWishlistItems');

const myWishlistItem = process.argv[2];

assert.equal(retrieveWishlistItems(myWishlistItem), process.argv[2]);
