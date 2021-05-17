import { Subject } from 'rxjs';
import { ReactiveStore } from 'rxjs-pubsub';
import { PlatformEvents } from './PlatformEvents';

export const reactiveStore =
  ReactiveStore.instance() as unknown as ReactiveStore<
    PlatformEvents,
    keyof PlatformEvents
  >;

export const registerEvents = () => {
  console.log('Platform ::::::::::: Registering events');
  registerSideBarEvents();
  console.log('Platform ::::::::::: Event registration finished');
};

const registerSideBarEvents = () => {
  type SideBarEventData = PlatformEvents['Sidebar'];
  reactiveStore
    .onLevel('Sidebar')
    .save('MenuClick', new Subject<SideBarEventData['MenuClick']>());
};
