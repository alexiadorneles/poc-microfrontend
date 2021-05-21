export const ROUTE_PATHS = ['meals', 'desserts'] as const;
export type AvailableRoutes = typeof ROUTE_PATHS[number];

export interface InternalRoute {
  id: AvailableRoutes;
  name: string;
  icon: string;
  subMenus?: InternalRoute[];
}

export const ROUTER_OUTLET = 'mfe1';
export const INTERNAL_ROUTES: InternalRoute[] = [
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
];
