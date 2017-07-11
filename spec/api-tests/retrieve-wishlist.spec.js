const frisby = require('frisby');

frisby.create('Retrieve wishlist')
  .get('http://localhost:3000/wishlist?name=Mahfam')
  .expectStatus(200)
  .expectJSON(['Townhouse'])
  .toss();
