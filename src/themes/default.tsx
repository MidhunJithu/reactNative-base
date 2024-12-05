import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {ThemeType} from './types';

export const lightTheme: ThemeType = {
  isDarkMode: false,
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    background: '#fff',
    card: '#fff',
    text: '#000',
    border: '#000',
    notification: '#000',
  },
};
export const darkTheme: ThemeType = {
  isDarkMode: true,
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#fff',
    background: '#000',
    card: '#000',
    text: '#fff',
    border: '#fff',
    notification: '#fff',
  },
};

export const defaultTheme: ThemeType = darkTheme;

export default defaultTheme;
