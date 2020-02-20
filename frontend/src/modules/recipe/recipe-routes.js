import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const recipeListPage = () =>
  import('@/modules/recipe/components/recipe-list-page.vue');
const recipeFormPage = () =>
  import('@/modules/recipe/components/recipe-form-page.vue');
const recipeViewPage = () =>
  import('@/modules/recipe/components/recipe-view-page.vue');
const recipeImporterPage = () =>
  import('@/modules/recipe/components/recipe-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'recipe',
        path: '/recipe',
        component: recipeListPage,
        meta: {
          auth: true,
          permission: Permissions.values.recipeView,
        },
      },
      {
        name: 'recipeNew',
        path: '/recipe/new',
        component: recipeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.recipeCreate,
        },
      },
      {
        name: 'recipeImporter',
        path: '/recipe/import',
        component: recipeImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.recipeImport,
        },
      },
      {
        name: 'recipeEdit',
        path: '/recipe/:id/edit',
        component: recipeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.recipeEdit,
        },
        props: true,
      },
      {
        name: 'recipeView',
        path: '/recipe/:id',
        component: recipeViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.recipeView,
        },
        props: true,
      },
    ],
  },
];
