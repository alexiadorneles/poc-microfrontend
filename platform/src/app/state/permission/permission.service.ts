import { Injectable } from '@angular/core';
import { createPermission, Permission } from './permission.model';
import { PermissionStore } from './permission.store';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(private permissionStore: PermissionStore) {
    this.add(createPermission({ id: 2, name: 'MENU_EDIT' }));
    this.add(createPermission({ id: 3, name: 'MENU_DELETE' }));
  }

  add(permission: Permission) {
    this.permissionStore.add(permission);
  }
}
