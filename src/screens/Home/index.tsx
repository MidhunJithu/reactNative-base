import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from 'src/styles/common';
import {useAppTheme} from 'src/themes/hook';

export const HomeScreen = () => {
  const navigation: any = useNavigation();
  const theme = useAppTheme();
  return (
    <View style={globalStyles.container}>
      <Text style={{color: theme.colors.text}}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('NotFoundScreen')}
      />
    </View>
  );
};
