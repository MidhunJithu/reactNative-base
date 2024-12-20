import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import {routes} from './routes';
import DrawerStack from './drawer';
import {useAppStore} from '../store/appstore/';
import {darkTheme, lightTheme} from '../themes/default';
import {KEY_NAME} from '../utils/identifiers';

const AppNavigation = () => {
  const RootStackNavigation = createNativeStackNavigator();
  const navigationRef = createNavigationContainerRef();
  const {theme} = useAppStore();
  const appTheme = theme === KEY_NAME.DARK ? darkTheme : lightTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={appTheme}>
      <RootStackNavigation.Navigator screenOptions={{headerShown: true}}>
        {/* Drawer Routes */}
        <RootStackNavigation.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{
            headerShown: false,
          }}
        />
        {/* Stack Routes */}
        {routes.map((route, index) => (
          <RootStackNavigation.Screen
            key={index}
            name={route.name}
            component={Screens[route.component as keyof typeof Screens]}
            options={route.options}
          />
        ))}
        {/* Stack Routes */}
      </RootStackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
