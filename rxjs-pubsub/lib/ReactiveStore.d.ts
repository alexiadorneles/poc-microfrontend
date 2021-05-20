import * as rxjs from 'rxjs';
export declare class ReactiveStore<ReactionLevel, L extends keyof ReactionLevel> {
    private static _instance;
    static instance<ReactionLevel, L extends keyof ReactionLevel>(): ReactiveStore<ReactionLevel, L>;
    onLevel<K extends keyof ReactionLevel>(_level: K): ReactiveStore<ReactionLevel, K>;
    save<T extends keyof ReactionLevel[L], R extends rxjs.Subject<ReactionLevel[L][T]>>(name: T, observable: R): ReactiveStore<ReactionLevel, L>;
    getObservable<T extends keyof ReactionLevel[L], R extends rxjs.Subject<ReactionLevel[L][T]>>(name: T): R;
    getSubject<T extends keyof ReactionLevel[L], R extends rxjs.Subject<ReactionLevel[L][T]>>(name: T): R;
}
//# sourceMappingURL=ReactiveStore.d.ts.map