import React from 'react';
import {Text, View} from 'react-native';
import {useAppTheme} from 'src/themes/hook';

export const ProfileScreen = () => {
  const theme = useAppTheme();

  return (
    <View>
      <Text style={{color: theme.colors.text}}>your profile screen</Text>
    </View>
  );
};
