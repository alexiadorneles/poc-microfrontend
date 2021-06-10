import { InjectionToken } from '@angular/core';
import { SessionStore } from '../state/stores';

export const SESSION_STORE_INJECTOR: InjectionToken<SessionStore> =
  new InjectionToken<SessionStore>('SessionStore');
