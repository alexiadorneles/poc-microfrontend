export interface Menu {
  id: string;
  name: string;
  icon: string;
  submenus?: Menu[];
}

export const menuMock: Menu[] = [
  {
    id: 'meal',
    name: 'Meals',
    icon: ''
  },
  {
    id: 'desert',
    name: 'Deserts',
    icon: ''
  }
]
