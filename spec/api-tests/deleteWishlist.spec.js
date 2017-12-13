const frisby = require('frisby');

describe('Delete wishlist', () => {
  it('that does not exist should return a 404', (done) => {
    frisby
      .del('http://localhost:3000/wishlist/does-not-exist')
      .expect('status', 404)
      .done(done);
  });
});

