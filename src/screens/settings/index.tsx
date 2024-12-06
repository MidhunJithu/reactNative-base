import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAppStore} from 'src/store/appstore';
import {useAppTheme} from 'src/themes/hook';
import {KEY_NAME} from 'src/utils/identifiers';
import {globalStyles} from 'src/styles/common';

export const SettingsScreen = () => {
  // const {theme, toggleTheme} = useTheme();
  const {theme, setTheme} = useAppStore();
  const apptheme = useAppTheme();
  const toggleTheme = () => {
    setTheme(theme === KEY_NAME.DARK ? KEY_NAME.LIGHT : KEY_NAME.DARK);
  };
  return (
    <View style={globalStyles.container}>
      <Text style={{color: apptheme.colors.text}}>Settings screen</Text>
      <Button title="Change Theme" onPress={() => toggleTheme()} />
    </View>
  );
};
