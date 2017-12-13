const uploadWishlist = require('../uploadWishlist');
const retrieveWishlistFor = require('../retrieveWishlistFor');
const updateWishlistFor = require('../updateWishlistFor');
const deleteWishlist = require('../deleteWishlist');

module.exports = {
  upload: (req, res) => {
    const name = req.body.name;
    uploadWishlist(req.body.wishlistItems, name)
      .then((result) => {
        if (result.ok === 1) {
          res.status(201).json({ url: `/wishlist/${name}` });
        } else {
          res.status(500).end();
        }
      });
  },
  get: (req, res) => {
    retrieveWishlistFor(req.params.userId)
      .then((retrievedWishlist) => {
        if (retrievedWishlist) {
          res.json({ wishlist: retrievedWishlist });
        } else {
          res.status(404).end();
        }
      });
  },
  put: (req, res) => {
    const name = req.params.userId;
    const wishlist = req.body.wishlistItems;

    updateWishlistFor(name, wishlist)
      .then((result) => {
        if (result.value && result.ok === 1) {
          res.json({ url: `/wishlist/${name}` });
        } else if (!result.value && result.ok === 1) {
          res.status(404).end();
        } else {
          res.status(500).end();
        }
      });
  },
  del: (req, res) => {
    const name = req.params.userId;
    deleteWishlist(name)
      .then((result) => {
        if (result.value && result.ok === 1) {
          res.status(200).end();
        } else if (!result.value && result.ok === 1) {
          res.status(404).end();
        } else {
          res.status(500).end();
        }
      });
  }
};
