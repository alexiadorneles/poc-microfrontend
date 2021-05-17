export interface ConsumerEvents {
  Sidebar: {
    MenuClick: { menuID: string };
    AnotherEvent: number;
  };
  SomethingElse: {
    EventNameHere: string;
  };
}
