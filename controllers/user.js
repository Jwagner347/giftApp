const createUser = require('../createUser');

module.exports = {
  create: (req, res) => {
    const userName = req.body.userName;
    createUser(userName)
      .then((result) => {
        if (result.ok === 1) {
          res.status(201).end();
        } else if (result.resourceAlreadyExists) {
          res.status(409).end();
        } else {
          res.status(500).end();
        }
      });
  }
};
