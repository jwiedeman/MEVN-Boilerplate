import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class recipePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.recipeRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.recipeImport,
    );
    this.recipeAutocomplete = permissionChecker.match(
      Permissions.values.recipeAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.recipeCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.recipeEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.recipeDestroy,
    );
  }
}
