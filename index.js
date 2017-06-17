const express = require('express');
const bodyParser = require('body-parser');

const wishlistController = require('./controllers/wishlist');

const app = express();
app.use(bodyParser.json());

app.post('/wishlist/upload', (req, res) => {
  wishlistController.upload(req, res);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
