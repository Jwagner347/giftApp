const express = require('express');
const bodyParser = require('body-parser');

const wishlistController = require('./controllers/wishlist');
const userController = require('./controllers/user');

const app = express();
app.use(bodyParser.json());

app.get('/wishlist/:userId', (req, res) => {
  wishlistController.get(req, res);
});

app.put('/wishlist/:userId', (req, res) => {
  wishlistController.put(req, res);
});

app.delete('/wishlist/:userId', (req, res) => {
  wishlistController.del(req, res);
});

app.post('/wishlist/new', (req, res) => {
  wishlistController.upload(req, res);
});

// app.get('/user/:userId', (req, res) => {
//   userController.get(req, res);
// });

// app.put('/user/:userId', (req, res) => {
//   userController.put(req, res);
// });
//
// app.delete('/user/:userId', (req, res) => {
//   userController.del(req, res);
// });

app.post('/user/new', (req, res) => {
  userController.create(req, res);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
