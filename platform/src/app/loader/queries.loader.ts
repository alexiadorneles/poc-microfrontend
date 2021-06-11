import { Injectable } from '@angular/core';
import { PermissionQuery } from '../state/permission/permission.query';

@Injectable({ providedIn: 'root' })
export class QueriesLoader {
  /*
    This code is needed in order for Angular to create the query
    and Akita to register it on window for the micro frontends
    to use it
  */
  constructor(permissionQuery: PermissionQuery) {}
  public load(): void {}
}
