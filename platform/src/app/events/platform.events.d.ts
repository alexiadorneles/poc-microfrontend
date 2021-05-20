import { AuthStatus } from '../@types';

export interface SideBarEvents {
  MenuClick: { menuID: string };
}

export interface AuthEvents {
  NewStatus: AuthStatus;
}

export interface PlatformEvents {
  Sidebar: SideBarEvents;
  Auth: AuthEvents;
}
