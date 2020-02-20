import removemeListStore from '@/modules/removeme/removeme-list-store';
import removemeViewStore from '@/modules/removeme/removeme-view-store';
import removemeImporterStore from '@/modules/removeme/removeme-importer-store';
import removemeFormStore from '@/modules/removeme/removeme-form-store';
import removemeDestroyStore from '@/modules/removeme/removeme-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: removemeDestroyStore,
    form: removemeFormStore,
    list: removemeListStore,
    view: removemeViewStore,
    importer: removemeImporterStore,
  },
};
