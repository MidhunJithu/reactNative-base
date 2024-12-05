import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useTheme} from '../../context/themeContext';

export const HomeScreen = () => {
  const navigation: any = useNavigation();
  const {theme} = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: theme.colors.text}}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('NotFoundScreen')}
      />
    </View>
  );
};
