import React from 'react';
import {Button, Text, View} from 'react-native';
import {useTheme} from '../../context/themeContext';

export const SettingsScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: theme.colors.text}}>Settings screen</Text>
      <Button title="Change Theme" onPress={() => toggleTheme()} />
    </View>
  );
};
