import { InjectionToken } from '@angular/core';
import { SessionQuery } from '../state/queries';

export const SESSION_QUERY_INJECTOR = new InjectionToken<SessionQuery>(
  'SessionQuery'
);
