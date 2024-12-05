import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '../../context/themeContext';

export const ProfileScreen = () => {
  const {theme} = useTheme();

  return (
    <View>
      <Text style={{color: theme.colors.text}}>your profile screen</Text>
    </View>
  );
};
