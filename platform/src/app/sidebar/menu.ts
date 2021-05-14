export interface Menu {
  id: string;
  name: string;
  icon: string;
  subMenus?: Menu[];
}

export const menuMock: Menu[] = [
  {
    id: 'meals',
    name: 'Meals',
    icon: ''
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: ''
  }
]
