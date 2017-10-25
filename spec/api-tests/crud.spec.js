const frisby = require('frisby');

describe('Wishlists', () => {
  it('should fulfill all crud operations', (done) => {
    frisby
      .post('http://localhost:3000/wishlist/new', { wishlistItems: ['Townhouse'], name: 'Mahfam' }, { json: true })
      .expect('status', 200)
      .expect('header', 'content-type', /application\/json/)
      .expect('json', {
        url: '/wishlist/Mahfam'
      })
      .then(() => {
        return frisby
          .get('http://localhost:3000/wishlist/Mahfam')
          .expect('status', 200)
          .expect('header', 'content-type', /application\/json/)
          .expect('json', {
            wishlist: ['Townhouse']
          });
      })
      .then(() => {
        return frisby
          .put('http://localhost:3000/wishlist/Mahfam', {
            wishlistItems: ['Townhouse', '2 Flat'],
            name: 'Mahfam'
          })
          .expect('status', 200)
          .expect('header', 'content-type', /application\/json/)
          .expect('json', {
            url: '/wishlist/Mahfam'
          });
      })
      .then(() => {
        return frisby
          .get('http://localhost:3000/wishlist/Mahfam')
          .expect('status', 200)
          .expect('header', 'content-type', /application\/json/)
          .expect('json', {
            wishlist: ['Townhouse', '2 Flat']
          });
      })
      .then(() => {
        frisby
          .del('http://localhost:3000/wishlist/Mahfam')
          .expect('status', 200);
      })
      .done(done);
  });
});

