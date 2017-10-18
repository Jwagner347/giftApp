const express = require('express');
const bodyParser = require('body-parser');

const wishlistController = require('./controllers/wishlist');

const app = express();
app.use(bodyParser.json());

app.get('/wishlist/:userId', (req, res) => {
  wishlistController.get(req, res);
});

app.put('/wishlist/:userId', (req, res) => {
  wishlistController.put(req, res);
});

app.post('/wishlist/new', (req, res) => {
  wishlistController.upload(req, res);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
