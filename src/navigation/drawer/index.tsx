import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from 'src/screens';
import React from 'react';
import {drawerRoutes} from './routes';

// drawer navigation
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        headerShown: true,
      }}>
      {drawerRoutes.map((route, index) => (
        <Drawer.Screen
          key={index}
          name={route.name}
          component={Screens[route.component as keyof typeof Screens]}
          options={route.options}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
