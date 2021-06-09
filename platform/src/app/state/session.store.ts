import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';

export interface Session {
  token: string;
  name: string;
}

export interface SessionState
  extends EntityState<Session, number>,
    ActiveState {}

export function createInitialState(): SessionState {
  return {
    token: '',
    name: '',
    active: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends EntityStore<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
