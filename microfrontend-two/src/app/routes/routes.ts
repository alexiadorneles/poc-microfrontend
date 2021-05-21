export const ROUTE_PATHS = [
  'address',
  'payment-method',
  'confirmation',
] as const;

export type AvailableRoutes = typeof ROUTE_PATHS[number];

export interface InternalRoute {
  id: AvailableRoutes;
  name: string;
  icon: string;
  subMenus?: InternalRoute[];
}

export const ROUTER_OUTLET = 'mfe2';
export const INTERNAL_ROUTES: InternalRoute[] = [
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
