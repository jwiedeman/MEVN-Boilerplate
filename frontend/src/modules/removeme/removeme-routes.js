import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const RemovemeListPage = () =>
  import('@/modules/removeme/components/removeme-list-page.vue');
const RemovemeFormPage = () =>
  import('@/modules/removeme/components/removeme-form-page.vue');
const RemovemeViewPage = () =>
  import('@/modules/removeme/components/removeme-view-page.vue');
const RemovemeImporterPage = () =>
  import('@/modules/removeme/components/removeme-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'removeme',
        path: '/removeme',
        component: RemovemeListPage,
        meta: {
          auth: true,
          permission: Permissions.values.removemeView,
        },
      },
      {
        name: 'removemeNew',
        path: '/removeme/new',
        component: RemovemeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.removemeCreate,
        },
      },
      {
        name: 'removemeImporter',
        path: '/removeme/import',
        component: RemovemeImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.removemeImport,
        },
      },
      {
        name: 'removemeEdit',
        path: '/removeme/:id/edit',
        component: RemovemeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.removemeEdit,
        },
        props: true,
      },
      {
        name: 'removemeView',
        path: '/removeme/:id',
        component: RemovemeViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.removemeView,
        },
        props: true,
      },
    ],
  },
];
