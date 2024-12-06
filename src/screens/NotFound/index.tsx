import React from 'react';
import {Text, View} from 'react-native';
import {useAppTheme} from 'src/themes/hook';

export const NotFoundScreen = () => {
  const theme = useAppTheme();

  return (
    <View>
      <Text style={{color: theme.colors.text}}>404 Not found</Text>
    </View>
  );
};
