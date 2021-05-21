import * as rxjs from 'rxjs';

type CustomWindow = typeof window & {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reactiveObservables: any;
};

const WINDOW = window as CustomWindow;
WINDOW.reactiveObservables = WINDOW.reactiveObservables || {};

export class ReactiveStore<ReactionLevel, L extends keyof ReactionLevel> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private static _instance: ReactiveStore<any, any>;

	public static instance<ReactionLevel, L extends keyof ReactionLevel>(): ReactiveStore<ReactionLevel, L> {
		return this._instance || (this._instance = new this());
	}

	// level here is needed to reinforce type K in return
	public onLevel<K extends keyof ReactionLevel>(_level: K): ReactiveStore<ReactionLevel, K> {
		return this as ReactiveStore<ReactionLevel, K>;
	}

	public save<T extends keyof ReactionLevel[L], R extends rxjs.Subject<ReactionLevel[L][T]>>(
		name: T,
		observable: R
	): ReactiveStore<ReactionLevel, L> {
		if (WINDOW.reactiveObservables[name]) {
			throw new Error('event already registered: ' + name);
		}
		WINDOW.reactiveObservables[name] = observable;
		return this;
	}

	public getObservable<T extends keyof ReactionLevel[L], R extends rxjs.Subject<ReactionLevel[L][T]>>(name: T): R {
		return WINDOW.reactiveObservables[name]?.asObservable() as R;
	}

	public getSubject<T extends keyof ReactionLevel[L], R extends rxjs.Subject<ReactionLevel[L][T]>>(name: T): R {
		return WINDOW.reactiveObservables[name] as R;
	}
}
