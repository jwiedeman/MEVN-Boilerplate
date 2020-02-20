<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.recipe.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.recipe.list.title"></app-i18n>
      </h1>

      <app-recipe-list-toolbar></app-recipe-list-toolbar>
      <app-recipe-list-filter></app-recipe-list-filter>
      <app-recipe-list-table></app-recipe-list-table>
    </div>
  </div>
</template>

<script>
import recipeListFilter from '@/modules/recipe/components/recipe-list-filter.vue';
import recipeListTable from '@/modules/recipe/components/recipe-list-table.vue';
import recipeListToolbar from '@/modules/recipe/components/recipe-list-toolbar.vue';

export default {
  name: 'app-recipe-list-page',

  components: {
    [recipeListFilter.name]: recipeListFilter,
    [recipeListTable.name]: recipeListTable,
    [recipeListToolbar.name]: recipeListToolbar,
  },
};
</script>

<style>
</style>
