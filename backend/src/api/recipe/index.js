module.exports = (app) => {
  app.post(`/recipe`, require('./recipeCreate'));
  app.put(`/recipe/:id`, require('./recipeUpdate'));
  app.post(`/recipe/import`, require('./recipeImport'));
  app.delete(`/recipe`, require('./recipeDestroy'));
  app.get(
    `/recipe/autocomplete`,
    require('./recipeAutocomplete'),
  );
  app.get(`/recipe`, require('./recipeList'));
  app.get(`/recipe/:id`, require('./recipeFind'));
};
