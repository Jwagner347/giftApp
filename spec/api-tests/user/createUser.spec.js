const frisby = require('frisby');
const API_HOST = process.env.API_HOST;

describe('Create user', () => {
  it('should create a new user', (done) => {
    frisby
      .post(`${API_HOST}/user/new`, { userName: 'newUser' }, { json: true })
      .expect('status', 201)
      .done(done);
  });

  it('should not create a new user when user with same name already exists', (done) => {
    frisby
      .post(`${API_HOST}/user/new`, { userName: 'user dos' }, { json: true })
      .expect('status', 201)
      .then(() => {
        return frisby
          .post(`${API_HOST}/user/new`, { userName: 'user dos' }, { json: true })
          .expect('status', 409);
      })
      .done(done);
  });
});
