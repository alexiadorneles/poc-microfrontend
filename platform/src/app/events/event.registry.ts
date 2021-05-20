import { BehaviorSubject, Subject } from 'rxjs';
import { ReactiveStore } from 'rxjs-pubsub';
import { AuthEvents, PlatformEvents, SideBarEvents } from './platform.events';

export const reactiveStore =
  ReactiveStore.instance() as unknown as ReactiveStore<
    PlatformEvents,
    keyof PlatformEvents
  >;

const registerSideBarEvents = () => {
  reactiveStore
    .onLevel('Sidebar')
    .save('MenuClick', new Subject<SideBarEvents['MenuClick']>());
};

const registerAuthEvents = () => {
  const auth = { authState: 'unauthenticated', token: '' };
  reactiveStore
    .onLevel('Auth')
    .save('NewStatus', new BehaviorSubject<AuthEvents['NewStatus']>(auth));
};

export const registerEvents = () => {
  console.log('Platform ::::::::::: Registering events');
  registerSideBarEvents();
  registerAuthEvents();
  console.log('Platform ::::::::::: Event registration finished');
};
