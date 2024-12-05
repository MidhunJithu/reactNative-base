import React, {createContext} from 'react';
import {darkTheme, lightTheme} from '../themes/default';
import {ThemeType} from '../themes/types';
import {useColorScheme} from 'react-native';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({children}: any) => {
  const colorscheme = useColorScheme();

  const [theme, setTheme] = React.useState<ThemeType>(
    colorscheme === 'dark' ? darkTheme : lightTheme,
  );
  const toggleTheme = () => {
    setTheme(prevtheme => (prevtheme.dark ? lightTheme : darkTheme));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
