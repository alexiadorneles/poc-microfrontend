import { AuthStatus } from '../@types';

export interface SideBarEvents {
  MenuClick: { menuID: string };
}

export interface AuthEvents {
  NewStatus: AuthStatus;
}

export interface ConsumerEvents {
  Sidebar: SideBarEvents;
  Auth: AuthEvents;
}
