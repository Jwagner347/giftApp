const frisby = require('frisby');

describe('Get wishlist', () => {
  it('returns 404 if wishlist does not exist', (done) => {
    frisby
      .get('http://localhost:3000/wishlist/does-not-exist')
      .expect('status', 404)
      .done(done);
  });
});

