import routes from '@/modules/recipe/recipe-routes';
import store from '@/modules/recipe/recipe-store';
import recipeAutocompleteInput from '@/modules/recipe/components/recipe-autocomplete-input';

export default {
  components: [recipeAutocompleteInput],
  routes,
  store,
};
