import { InternalRoute } from '../routes/routes';

export interface MenuEvents {
  MfeMenus: { menus: InternalRoute[] };
}

export interface ProducerEvents {
  Menu: MenuEvents;
}
