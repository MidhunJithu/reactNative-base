import {IMenu, IRoutes} from '../types';

export const drawerRoutes: IMenu[] = [
  {
    route: IRoutes.HomeScreen,
    name: IRoutes.HomeScreen,
    friendlyName: 'Dashboard',
    icon: 'Dashboard',
    component: IRoutes.HomeScreen,
    friendlyURL: '',
  },
  {
    route: IRoutes.ProfileScreen,
    name: IRoutes.ProfileScreen,
    friendlyName: 'Profile',
    icon: 'Profile',
    component: IRoutes.ProfileScreen,
    friendlyURL: '/profile',
  },
  {
    route: IRoutes.SettingsScreen,
    name: IRoutes.SettingsScreen,
    friendlyName: 'Settings',
    icon: 'Settings',
    component: IRoutes.SettingsScreen,
    friendlyURL: '/settings',
  },
];
