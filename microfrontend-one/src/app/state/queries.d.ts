import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PermissionState, SessionState } from './states';
export interface SessionQuery extends QueryEntity<SessionState> {
  getReversedToken(): Observable<string | undefined>;
}

export interface PermissionQuery extends QueryEntity<PermissionState> {
  userHasPermission(permissionName: string): Observable<boolean>;
}

export interface PlatformQueries {
  session: SessionQuery;
  permission: PermissionQuery;
}
