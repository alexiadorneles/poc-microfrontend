import { Injectable } from '@angular/core';
import { reactiveStore } from '../events/event.registry';
import { PlatformEvents } from '../events/platform.events';

@Injectable({ providedIn: 'root' })
export class EventService {
  public fireEvent<
    T extends keyof PlatformEvents,
    R extends keyof PlatformEvents[T]
  >(level: T, event: R, data: PlatformEvents[T][R]): void {
    reactiveStore.onLevel(level).getSubject(event).next(data);
  }
}
