import { EntityState, ActiveState } from '@datorama/akita';
import { Permission, Session } from './model';

export interface SessionState
  extends EntityState<Session, string>,
    ActiveState {}

export interface PermissionState
  extends EntityState<Permission, string>,
    ActiveState {}
