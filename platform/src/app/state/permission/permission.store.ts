import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createPermission, Permission } from './permission.model';

export interface PermissionState extends EntityState<Permission, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'permission' })
export class PermissionStore extends EntityStore<PermissionState> {
  constructor() {
    super({
      entities: { '1': createPermission({ id: 1, name: 'MENU_VIEW' }) },
    });
  }
}
