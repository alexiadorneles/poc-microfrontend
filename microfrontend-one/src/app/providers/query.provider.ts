import { queryInjector } from '../injectors/query.injector';
import { PlatformQueries } from '../state/queries';

export namespace QueryProvider {
  export function provide(name: keyof PlatformQueries, token: string) {
    return {
      provide: queryInjector.createQueryInjector(name, token),
      useValue: window.$$queries[name],
    };
  }
}
