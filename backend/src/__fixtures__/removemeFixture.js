const genericFixture = require('./genericFixture');
const RemovemeRepository = require('../database/repositories/removemeRepository');

const removemeFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new RemovemeRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = removemeFixture;
