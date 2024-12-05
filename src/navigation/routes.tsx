import {IMenu, IRoutes} from './types';

export const routes: IMenu[] = [
  {
    name: IRoutes.HomeScreen,
    friendlyName: 'Home',
    friendlyURL: '/home',
    component: IRoutes.HomeScreen,
    defaultMenuOptions: true,
    options: {
      headerShown: true,
    },
  },
  {
    name: IRoutes.NotFoundScreen,
    friendlyName: 'NotFound',
    friendlyURL: '/not-found',
    component: IRoutes.NotFoundScreen,
    defaultMenuOptions: true,
  },
];
