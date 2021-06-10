import { Injectable } from '@angular/core';
import { SessionStore } from '../state/session/session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  public updateToken(token: string): void {
    this.sessionStore.set([{ token }]);
  }

  public setActive(sessionID: string): void {
    this.sessionStore.setActive(sessionID);
  }
}
