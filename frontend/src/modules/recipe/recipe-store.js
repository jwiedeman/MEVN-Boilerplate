import recipeListStore from '@/modules/recipe/recipe-list-store';
import recipeViewStore from '@/modules/recipe/recipe-view-store';
import recipeImporterStore from '@/modules/recipe/recipe-importer-store';
import recipeFormStore from '@/modules/recipe/recipe-form-store';
import recipeDestroyStore from '@/modules/recipe/recipe-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: recipeDestroyStore,
    form: recipeFormStore,
    list: recipeListStore,
    view: recipeViewStore,
    importer: recipeImporterStore,
  },
};
