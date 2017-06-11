const uploadWishlist = require('../uploadWishlist');

module.exports = {
  upload: (req, res) => {
    const uploadedWishlist = uploadWishlist(req.body.wishlistItems, req.body.name);
    res.json(uploadedWishlist);
  }
};
