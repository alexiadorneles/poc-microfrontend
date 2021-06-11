import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PermissionState, PermissionStore } from './permission.store';

@Injectable({ providedIn: 'root' })
export class PermissionQuery extends QueryEntity<PermissionState> {
  constructor(protected store: PermissionStore) {
    super(store);
  }

  userHasViewPermission$ = this.userHasPermission('MENU_VIEW');

  public userHasPermission(permissionName: string): Observable<boolean> {
    return this.selectAll({
      filterBy: (permission) => permission.name === permissionName,
    }).pipe(map((permission) => Boolean(permission)));
  }
}
