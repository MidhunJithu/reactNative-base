import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '../../context/themeContext';

export const NotFoundScreen = () => {
  const {theme} = useTheme();

  return (
    <View>
      <Text style={{color: theme.colors.text}}>404 Not found</Text>
    </View>
  );
};
