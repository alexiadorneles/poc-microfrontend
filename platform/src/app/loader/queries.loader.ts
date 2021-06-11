import { Injectable } from '@angular/core';
import { PermissionQuery } from '../state/permission/permission.query';

@Injectable({ providedIn: 'root' })
export class QueriesLoader {
  constructor(permissionQuery: PermissionQuery) {}
  public load(): void {}
}
