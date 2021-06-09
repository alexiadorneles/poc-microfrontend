import { Injectable } from '@angular/core';
import { SessionStore } from '../state/session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore) {}

  public updateToken(token: string): void {
    this.sessionStore.update({ token });
  }

  public setActive(sessionID: number): void {
    this.sessionStore.setActive(sessionID);
  }
}
