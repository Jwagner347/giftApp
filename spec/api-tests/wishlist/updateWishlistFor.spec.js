const frisby = require('frisby');

describe('Update wishlist', () => {
  it('returns 404 if wishlist does not exist', (done) => {
    frisby
      .put('http://localhost:3000/wishlist/does-not-exist', {
        wishlistItems: ['anti-matter', 'matter']
      })
      .expect('status', 404)
      .done(done);
  });
});

