import importerStore from '@/shared/importer/importer-store';
import { RemovemeService } from '@/modules/removeme/removeme-service';
import removemeImporterFields from '@/modules/removeme/removeme-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  RemovemeService.import,
  removemeImporterFields,
  i18n('entities.removeme.importer.fileName'),
  i18n('entities.removeme.importer.hint'),
);
