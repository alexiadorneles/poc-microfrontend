import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactiveStore } from 'rxjs-pubsub';
import { ConsumerEvents } from '../events/consumer.events';
import { ProducerEvents } from '../events/producer.events';

@Injectable({ providedIn: 'root' })
export class EventService {
  private consumerStore = ReactiveStore.instance() as ReactiveStore<
    ConsumerEvents,
    keyof ConsumerEvents
  >;

  private producerStore = ReactiveStore.instance() as ReactiveStore<
    ProducerEvents,
    keyof ProducerEvents
  >;

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

  private getObservableFunction<
    T extends keyof ConsumerEvents,
    R extends keyof ConsumerEvents[T]
  >(
    store: ReactiveStore<ConsumerEvents, T>
  ): (event: R) => Observable<ConsumerEvents[T][R]> {
    return (event: R) => store.getObservable(event);
  }
}
