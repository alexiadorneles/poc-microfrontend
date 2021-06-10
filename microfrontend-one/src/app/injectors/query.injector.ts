import { InjectionToken } from '@angular/core';
import { PlatformQueries } from '../state/queries';

export class QueryInjector {
  private constructor() {}
  private static _instance: QueryInjector | undefined;
  private queries: { [key in keyof PlatformQueries]?: InjectionToken<any> } =
    {};

  public static getInstance() {
    if (!this._instance) {
      this._instance = new QueryInjector();
    }
    return this._instance;
  }

  createQueryInjector(queryName: keyof PlatformQueries, queryToken: string) {
    this.queries[queryName] = new InjectionToken<
      PlatformQueries[typeof queryName]
    >(queryToken);
    return this.queries[queryName];
  }

  getQueryInjector(queryName: keyof PlatformQueries) {
    return this.queries[queryName];
  }
}

export const queryInjector = QueryInjector.getInstance();
