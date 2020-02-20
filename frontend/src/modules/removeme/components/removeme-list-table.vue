<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column :label="fields.id.label" :prop="fields.id.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'id') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.removemefield.label"
        :prop="fields.removemefield.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'removemefield') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/removeme/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/removeme/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { RemovemeModel } from '@/modules/removeme/removeme-model';
import { mapGetters, mapActions } from 'vuex';
import { RemovemePermissions } from '@/modules/removeme/removeme-permissions';
import { i18n } from '@/i18n';

const { fields } = RemovemeModel;

export default {
  name: 'app-removeme-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'removeme/list/rows',
      count: 'removeme/list/count',
      loading: 'removeme/list/loading',
      pagination: 'removeme/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'removeme/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new RemovemePermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new RemovemePermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'removeme/list/doChangeSort',
      doChangePaginationCurrentPage:
        'removeme/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'removeme/list/doChangePaginationPageSize',
      doMountTable: 'removeme/list/doMountTable',
      doDestroy: 'removeme/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return RemovemeModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
