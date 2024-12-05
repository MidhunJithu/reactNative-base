export interface IMenu {
  index?: number;
  route?: string;
  name: string;
  icon?: string;
  friendlyName: string;
  friendlyURL: string;
  notification?: number;
  component: any;
  options?: any;
  defaultMenuOptions?: boolean;
  initialParams?: any;
  headerShown?: boolean;
  animation?: string;
  presentation?: string;
  stack?: string;
  parentStack?: string;
}

export enum IRoutes {
  DrawerRoot = 'DrawerRoot',
  DrawerMain = 'DrawerMain',
  HomeScreen = 'HomeScreen',
  NotFoundScreen = 'NotFoundScreen',
  SettingsScreen = 'SettingsScreen',
  ProfileScreen = 'ProfileScreen',
}

export enum IRoutesStack {
  DrawerStack = 'DrawerStack',
}
