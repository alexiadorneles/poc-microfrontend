import { SessionQuery } from './app/state/queries';
import { SessionStore } from './app/state/stores';

declare global {
  interface Window {
    $$stores: {
      session: SessionStore;
    };

    $$queries: {
      session: SessionQuery;
    };
  }
}
