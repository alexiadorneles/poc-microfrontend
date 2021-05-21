import { Menu } from '../sidebar/menu';

interface MenuEvents {
  MfeMenus: { menus: Menu[] };
}

export interface ConsumerEvents {
  Menu: MenuEvents;
}
