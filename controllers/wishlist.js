const uploadWishlist = require('../uploadWishlist');
const retrieveWishlistFor = require('../retrieveWishlistFor');
const updateWishlistFor = require('../updateWishlistFor');

module.exports = {
  upload: (req, res) => {
    const uploadedWishlist = uploadWishlist(req.body.wishlistItems, req.body.name);
    res.json(uploadedWishlist);
  },
  get: (req, res) => {
    retrieveWishlistFor(req.params.userId)
      .then((retrievedWishlist) => {
        res.json({ wishlist: retrievedWishlist });
      });
  },
  put: (req, res) => {
    const name = req.params.userId;
    const wishlist = req.body.wishlistItems;

    updateWishlistFor(name, wishlist)
      .then((successfulUpdate) => {
        if (successfulUpdate.ok === 1) {
          res.json({ url: `/wishlist/${name}` });
        } else {
          res.status(500).end();
        }
      });
  }
};
