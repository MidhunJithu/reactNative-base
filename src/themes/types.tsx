import {Theme as NativeTheme} from '@react-navigation/native';

interface ThemeType extends NativeTheme {
  isDarkMode: boolean;
}

export type {ThemeType};
