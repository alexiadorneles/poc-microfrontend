import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { SessionState } from './stores';

export interface SessionQuery extends QueryEntity<SessionState> {
  getReversedToken(): Observable<string | undefined>;
}

export interface PlatformQueries {
  session: SessionQuery;
}
