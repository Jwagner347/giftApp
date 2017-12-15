const frisby = require('frisby');

describe('Create user', () => {
  it('should create a new user', (done) => {
    frisby
      .post('http://localhost:3000/user/new', { userName: 'newUser' }, { json: true })
      .expect('status', 201)
      .done(done);
  });

  it('should not create a new user when user with same name already exists', (done) => {
    frisby
      .post('http://localhost:3000/user/new', { userName: 'user dos' }, { json: true })
      .expect('status', 201)
      .then(() => {
        return frisby
          .post('http://localhost:3000/user/new', { userName: 'user dos' }, { json: true })
          .expect('status', 409);
      })
      .done(done);
  });
});

