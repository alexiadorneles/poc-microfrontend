import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends QueryEntity<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }
}
