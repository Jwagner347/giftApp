const frisby = require('frisby');

frisby.create('Upload wishlist')
  .post('http://localhost:3000/wishlist/upload', {
    wishlistItems: ['Townhouse'],
    name: 'Mahfam'
  }, { json: true })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    wishlistItems: ['Townhouse'],
    name: 'Mahfam'
  })
  .toss();
