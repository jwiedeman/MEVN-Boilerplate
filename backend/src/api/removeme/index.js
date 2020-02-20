module.exports = (app) => {
  app.post(`/removeme`, require('./removemeCreate'));
  app.put(`/removeme/:id`, require('./removemeUpdate'));
  app.post(`/removeme/import`, require('./removemeImport'));
  app.delete(`/removeme`, require('./removemeDestroy'));
  app.get(
    `/removeme/autocomplete`,
    require('./removemeAutocomplete'),
  );
  app.get(`/removeme`, require('./removemeList'));
  app.get(`/removeme/:id`, require('./removemeFind'));
};
