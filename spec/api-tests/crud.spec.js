const frisby = require('frisby');

describe('Wishlists', () => {
  it('should successfully create a new wishlist', (done) => {
    frisby
      .post('http://localhost:3000/wishlist/new', { wishlistItems: ['Townhouse'], name: 'Mahfam' }, { json: true })
      .expect('status', 201)
      .expect('header', 'content-type', /application\/json/)
      .expect('json', {
        url: '/wishlist/Mahfam'
      })
      .done(done);
  });

  it('should successfully get a wishlist by name', (done) => {
    frisby
      .get('http://localhost:3000/wishlist/Mahfam')
      .expect('status', 200)
      .expect('header', 'content-type', /application\/json/)
      .expect('json', {
        wishlist: ['Townhouse']
      })
      .done(done);
  });

  it('should successfully update a wishlist by name', (done) => {
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
      .then(() => {
        return frisby
          .get('http://localhost:3000/wishlist/Mahfam')
          .expect('status', 200)
          .expect('header', 'content-type', /application\/json/)
          .expect('json', {
            wishlist: ['Townhouse', '2 Flat']
          });
      })
      .done(done);
  });

  it('should successfully delete a wishlist', (done) => {
    frisby
      .del('http://localhost:3000/wishlist/Mahfam')
      .expect('status', 200)
      .then(() => {
        return frisby
          .get('http://localhost:3000/wishlist/Mahfam')
          .expect('status', 200)
          .expect('header', 'content-type', /application\/json/)
          .expect('jsonStrict', {
            wishlist: []
          });
      })
      .done(done);
  });
});

