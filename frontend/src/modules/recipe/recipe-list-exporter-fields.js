import { recipeModel } from '@/modules/recipe/recipe-model';

const { fields } = recipeModel;

export default [
  fields.id,
  fields.recipefield,
  fields.createdAt
];
