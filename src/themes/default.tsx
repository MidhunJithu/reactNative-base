import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {ThemeType} from './types';
import {COLORS} from 'src/utils/colors';

export const lightTheme: ThemeType = {
  isDarkMode: false,
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.Black,
    background: COLORS.White,
    card: COLORS.White,
    text: COLORS.Black,
    border: COLORS.Black,
    notification: COLORS.Black,
  },
};
export const darkTheme: ThemeType = {
  isDarkMode: true,
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.White,
    background: COLORS.Black,
    card: COLORS.Black,
    text: COLORS.White,
    border: COLORS.White,
    notification: COLORS.White,
  },
};

export const defaultTheme: ThemeType = darkTheme;

export default defaultTheme;
