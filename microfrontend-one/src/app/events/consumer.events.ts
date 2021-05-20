export interface SideBarEvents {
  MenuClick: { menuID: string };
}

export interface ConsumerEvents {
  Sidebar: SideBarEvents;
}
