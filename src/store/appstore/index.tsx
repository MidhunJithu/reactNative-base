import {create} from 'zustand';
import {ThemeState, UserState} from './types';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_NAME} from 'src/utils/identifiers';

interface AppState extends ThemeState, UserState {}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      theme: KEY_NAME.LIGHT,
      setTheme: theme => set({theme}),
      userData: null,
      setUserData: userData => set({userData}),
      clearUserData: () => set({userData: null}),
    }),
    {
      name: KEY_NAME.APPSTORAGE, // Storage key for persistent storage
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
