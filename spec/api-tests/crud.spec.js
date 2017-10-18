const frisby = require('frisby');


it('should return a status of 200', (done) => {
  frisby
    .post('http://localhost:3000/wishlist/new', { wishlistItems: ['Townhouse'], name: 'Mahfam' }, { json: true })
    .expect('status', 200)
    .expect('header', 'content-type', /application\/json/)
    .expect('json', {
      wishlistItems: ['Townhouse'],
      name: 'Mahfam'
    });

  frisby
    .get('http://localhost:3000/wishlist/Mahfam')
    .expect('status', 200)
    .expect('header', 'content-type', /application\/json/)
    .expect('json', {
      wishlist: ['Townhouse']
    });

  frisby
    .put('http://localhost:3000/wishlist/Mahfam', {
      wishlistItems: ['Townhouse', '2 Flat'],
      name: 'Mahfam'
    })
    .expect('status', 200)
    .expect('header', 'content-type', /application\/json/)
    .expect('json', {
      url: '/wishlist/Mahfam'
    })
    .done(done);
});

//
// frisby.create('Retrieve updated wishlist')
//   .get('http://localhost:3000/wishlist?name=Mahfam')
//   .expectStatus(200)
//   .expectJSON(['Townhouse', '2 Flat'])
//   .toss();
