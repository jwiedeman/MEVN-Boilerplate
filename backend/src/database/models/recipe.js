const database = require('mongoose');
const Schema = database.Schema;

/**
 * recipe database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const recipeschema = new Schema(
  {
    recipefield: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  { timestamps: true },
);

recipeschema.virtual('id').get(function() {
  return this._id.toHexString();
});

recipeschema.set('toJSON', {
  getters: true,
});

recipeschema.set('toObject', {
  getters: true,
});

const recipe = database.model('recipe', recipeschema);

module.exports = recipe;
