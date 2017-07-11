const uploadWishlist = require('../uploadWishlist');
const retrieveWishlistFor = require('../retrieveWishlistFor');
const wishlistsFromDataSource = require('../returnWishlistsFromDataSource');

module.exports = {
  upload: (req, res) => {
    const uploadedWishlist = uploadWishlist(req.body.wishlistItems, req.body.name);
    res.json(uploadedWishlist);
  },
  get: (req, res) => {
    const wishlists = wishlistsFromDataSource('./wishlistDataStore.json');
    const retrievedWishlist = retrieveWishlistFor(req.query.name, wishlists);
    res.json(retrievedWishlist);
  }
};
