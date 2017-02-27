const assert = require('assert');
const uploadWishlist = require('./index');

const myWishlistItem = "New MacBook";
const emptyWishlist = undefined;
const multipleWishlistItems = ["Kyocera", "Yacht", "Condo"];
const user = "Samwise Gangee";
const emptyUser = undefined;

// test both user and wishlist items are returned
assert.deepEqual(uploadWishlist(user, multipleWishlistItems), { user: user, wishlistItems: multipleWishlistItems })

// test empty wish lists are not accepted
assert.equal(uploadWishlist(user, emptyWishlist), "Please include at least one item for your wishlist");

// test multiple wish list items are returned
assert.deepEqual(uploadWishlist(user, multipleWishlistItems), { user: user, wishlistItems: multipleWishlistItems } );

// test no user passed in as argument throws error
assert.equal(uploadWishlist(emptyUser, multipleWishlistItems), "You must specify which user you are uploading a wish list for");
