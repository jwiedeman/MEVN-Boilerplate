<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/removeme' }">
        <app-i18n code="entities.removeme.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.removeme.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.removeme.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.removeme.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.removeme.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-removeme-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!findLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RemovemeForm from '@/modules/removeme/components/removeme-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-removeme-form-page',

  props: ['id'],

  components: {
    [RemovemeForm.name]: RemovemeForm,
  },

  computed: {
    ...mapGetters({
      record: 'removeme/form/record',
      findLoading: 'removeme/form/findLoading',
      saveLoading: 'removeme/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }
  },

  methods: {
    ...mapActions({
      doFind: 'removeme/form/doFind',
      doNew: 'removeme/form/doNew',
      doUpdate: 'removeme/form/doUpdate',
      doCreate: 'removeme/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/removeme');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
};
</script>

<style>
</style>
