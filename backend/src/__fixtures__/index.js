const userFixture = require('./userFixture');
const removemeFixture = require('./removemeFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  removeme: removemeFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
