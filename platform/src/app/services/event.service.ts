import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { ReactiveStore } from 'rxjs-pubsub';
import { ConsumerEvents } from '../events/consumer.events';
import { ProducerEvents } from '../events/producer.events';

@Injectable({ providedIn: 'root' })
export class EventService {
  private internalEventStore: Record<string, Subject<any>> = {};

  private producerStore = ReactiveStore.instance() as unknown as ReactiveStore<
    ProducerEvents,
    keyof ProducerEvents
  >;

  private consumerStore = ReactiveStore.instance() as unknown as ReactiveStore<
    ConsumerEvents,
    keyof ConsumerEvents
  >;

  constructor() {
    fromEvent(window, 'MfeLoaded').subscribe(this.updateEvents);
  }

  public fireEvent<
    T extends keyof ProducerEvents,
    R extends keyof ProducerEvents[T]
  >(level: T, event: R, data: ProducerEvents[T][R]): void {
    this.producerStore.onLevel(level).getSubject(event).next(data);
  }

  public onLevel<
    T extends keyof ConsumerEvents,
    R extends keyof ConsumerEvents[T]
  >(
    level: T
  ): {
    getObservable: (event: R) => Observable<ConsumerEvents[T][R]>;
  } {
    const getObservable = this.getObservableFunction<T, R>(
      this.consumerStore.onLevel(level)
    );
    return { getObservable };
  }

  public updateEvents = (): void => {
    Object.entries(this.internalEventStore).forEach(([eventName, subject]) => {
      const observable = this.consumerStore.getObservable(eventName as any);
      if (observable) {
        observable.subscribe((data) => subject.next(data));
        delete this.internalEventStore[eventName];
      }
    });
  };

  private getObservableFunction<
    T extends keyof ConsumerEvents,
    R extends keyof ConsumerEvents[T]
  >(
    store: ReactiveStore<ConsumerEvents, T>
  ): (event: R) => Observable<ConsumerEvents[T][R]> {
    return (event: R) => {
      const observable = store.getObservable(event);
      if (observable) {
        return observable;
      }

      this.internalEventStore[event as string] = new Subject();
      return this.internalEventStore[event as string].asObservable();
    };
  }
}
