import { Injectable } from '@angular/core';
import { ReactiveStore } from 'rxjs-pubsub';
import { ConsumerEvents } from '../events/consumer.events';

@Injectable({ providedIn: 'root' })
export class EventService {
  private store = ReactiveStore.instance() as ReactiveStore<
    ConsumerEvents,
    keyof ConsumerEvents
  >;

  public onLevel<T extends keyof ConsumerEvents>(
    level: T
  ): ReactiveStore<ConsumerEvents, T> {
    return this.store.onLevel(level);
  }
}
