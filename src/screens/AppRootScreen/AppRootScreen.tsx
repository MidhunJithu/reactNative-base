import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthContextProvider} from '../../context/authContext';
import {DataProvider} from '../../context/dataContext';
import AppNavigation from '../../navigation';
import {ThemeProvider} from '../../context/themeContext';

const AppRootScreen = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <AuthContextProvider>
          <DataProvider>
            <ThemeProvider>
              <AppNavigation />
            </ThemeProvider>
          </DataProvider>
        </AuthContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppRootScreen;
