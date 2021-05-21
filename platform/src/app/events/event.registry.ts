import { BehaviorSubject, Subject } from 'rxjs';
import { ReactiveStore } from 'rxjs-pubsub';
import { AuthEvents, ProducerEvents, SideBarEvents } from './producer.events';

const reactiveStore = ReactiveStore.instance() as unknown as ReactiveStore<
  ProducerEvents,
  keyof ProducerEvents
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
