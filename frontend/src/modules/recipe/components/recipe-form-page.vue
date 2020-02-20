<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/recipe' }">
        <app-i18n code="entities.recipe.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.recipe.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.recipe.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.recipe.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.recipe.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>
      
      <app-recipe-form
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
import recipeForm from '@/modules/recipe/components/recipe-form';
import { routerAsync } from '@/app-module';

export default {
  name: 'app-recipe-form-page',

  props: ['id'],

  components: {
    [recipeForm.name]: recipeForm,
  },

  computed: {
    ...mapGetters({
      record: 'recipe/form/record',
      findLoading: 'recipe/form/findLoading',
      saveLoading: 'recipe/form/saveLoading',
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
      doFind: 'recipe/form/doFind',
      doNew: 'recipe/form/doNew',
      doUpdate: 'recipe/form/doUpdate',
      doCreate: 'recipe/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/recipe');
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
