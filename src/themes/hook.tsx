import {KEY_NAME} from 'src/utils/identifiers';
import {useAppStore} from 'src/store/appstore';
import {darkTheme, lightTheme} from './default';
import {ThemeType} from './types';

/**
 * Hook to get the current theme.
 *
 * @returns The current theme.
 */
export const useAppTheme = (): ThemeType => {
  const {theme} = useAppStore();
  if (theme === KEY_NAME.DARK) {
    return darkTheme;
  }
  return lightTheme;
};
