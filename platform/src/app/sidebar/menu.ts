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
    icon: '',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '',
  },
  {
    id: 'address',
    name: 'Address',
    icon: '',
  },
  {
    id: 'payment-method',
    name: 'Payment Method',
    icon: '',
  },
  {
    id: 'confirmation',
    name: 'Confirmation',
    icon: '',
  },
];
