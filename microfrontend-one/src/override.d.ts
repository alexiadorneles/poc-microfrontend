import { PlatformQueries } from './app/state/queries';

declare global {
  interface Window {
    $$queries: PlatformQueries;
  }
}
