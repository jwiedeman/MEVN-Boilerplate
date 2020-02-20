import importerStore from '@/shared/importer/importer-store';
import { recipeservice } from '@/modules/recipe/recipe-service';
import recipeImporterFields from '@/modules/recipe/recipe-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  recipeservice.import,
  recipeImporterFields,
  i18n('entities.recipe.importer.fileName'),
  i18n('entities.recipe.importer.hint'),
);
