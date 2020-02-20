import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class RemovemePermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.removemeRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.removemeImport,
    );
    this.removemeAutocomplete = permissionChecker.match(
      Permissions.values.removemeAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.removemeCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.removemeEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.removemeDestroy,
    );
  }
}
