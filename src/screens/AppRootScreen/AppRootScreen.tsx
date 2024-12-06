import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthContextProvider} from 'src/context/authContext';
import {DataProvider} from 'src/context/dataContext';
import AppNavigation from 'src/navigation';
import {globalStyles} from 'src/styles/common';

const AppRootScreen = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={globalStyles.root}>
        <AuthContextProvider>
          <DataProvider>
            <AppNavigation />
          </DataProvider>
        </AuthContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppRootScreen;
