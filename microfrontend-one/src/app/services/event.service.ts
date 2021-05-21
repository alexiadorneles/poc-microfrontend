import { Injectable } from '@angular/core';
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

  public onLevel<T extends keyof ConsumerEvents>(
    level: T
  ): ReactiveStore<ConsumerEvents, T> {
    return this.consumerStore.onLevel(level);
  }
}
