import { Subject } from 'rxjs';
import { ReactiveStore } from 'rxjs-pubsub';
import { MenuEvents, ProducerEvents } from './producer.events';

const store = ReactiveStore.instance() as unknown as ReactiveStore<
  ProducerEvents,
  keyof ProducerEvents
>;

const registerMenuEvents = () => {
  store.onLevel('Menu').save('MfeMenus', new Subject<MenuEvents['MfeMenus']>());
};

export const registerEvents = () => {
  console.log('MFE1 ::::::::::: Registering events');
  registerMenuEvents();
  console.log('MFE1 ::::::::::: Event registration finished');
};
