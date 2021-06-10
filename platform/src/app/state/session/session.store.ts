import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';

export interface Session {
  token: string;
}

export interface SessionState
  extends EntityState<Session, string>,
    ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session', idKey: 'token' })
export class SessionStore extends EntityStore<SessionState> {
  constructor() {
    super();
  }
}
