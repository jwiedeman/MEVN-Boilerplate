const database = require('mongoose');
const Schema = database.Schema;

/**
 * Removeme database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const RemovemeSchema = new Schema(
  {
    removemefield: {
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

RemovemeSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

RemovemeSchema.set('toJSON', {
  getters: true,
});

RemovemeSchema.set('toObject', {
  getters: true,
});

const Removeme = database.model('removeme', RemovemeSchema);

module.exports = Removeme;
