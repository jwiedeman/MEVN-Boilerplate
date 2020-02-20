<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.removeme.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.removeme.list.title"></app-i18n>
      </h1>

      <app-removeme-list-toolbar></app-removeme-list-toolbar>
      <app-removeme-list-filter></app-removeme-list-filter>
      <app-removeme-list-table></app-removeme-list-table>
    </div>
  </div>
</template>

<script>
import RemovemeListFilter from '@/modules/removeme/components/removeme-list-filter.vue';
import RemovemeListTable from '@/modules/removeme/components/removeme-list-table.vue';
import RemovemeListToolbar from '@/modules/removeme/components/removeme-list-toolbar.vue';

export default {
  name: 'app-removeme-list-page',

  components: {
    [RemovemeListFilter.name]: RemovemeListFilter,
    [RemovemeListTable.name]: RemovemeListTable,
    [RemovemeListToolbar.name]: RemovemeListToolbar,
  },
};
</script>

<style>
</style>
