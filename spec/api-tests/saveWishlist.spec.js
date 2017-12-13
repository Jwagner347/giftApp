const frisby = require('frisby');

describe('Save wishlist', () => {
  it('should return 409 if wishlist already exists', (done) => {
    frisby
      .post('http://localhost:3000/wishlist/new', { wishlistItems: ['Townhouse'], name: 'Mahfam' }, { json: true })
      .expect('status', 201)
      .then(() => {
        return frisby
          .post('http://localhost:3000/wishlist/new', { wishlistItems: ['Townhouse'], name: 'Mahfam' }, { json: true })
          .expect('status', 409);
      })
      .done(done);
  });
});

