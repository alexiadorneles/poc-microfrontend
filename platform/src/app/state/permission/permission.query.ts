import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PermissionState, PermissionStore } from './permission.store';

@Injectable({ providedIn: 'root' })
export class PermissionQuery extends QueryEntity<PermissionState> {
  constructor(protected store: PermissionStore) {
    super(store);
  }

  /**
   * @deprecated The method should not be used
   */
  userHasMenuViewRole$ = this.userHasPermission('MENU_VIEW').pipe(
    tap(() => console.warn('this is deprecated'))
  );

  public userHasPermission(permissionName: string): Observable<boolean> {
    return this.selectAll({
      filterBy: (permission) => permission.name === permissionName,
    }).pipe(map((permission) => Boolean(permission.length)));
  }
}
