import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionState, SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends QueryEntity<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }

  public getReversedToken(): Observable<string | undefined> {
    return this.selectActive().pipe(
      map((session) => session?.token.split('').reverse().join(''))
    );
  }
}
