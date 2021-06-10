import { ActiveState, EntityState, EntityStore } from '@datorama/akita';

export interface Session {
  token: string;
}

export interface SessionState
  extends EntityState<Session, string>,
    ActiveState {}

export interface SessionStore extends EntityStore<SessionState> {}
