import {KEY_NAME} from 'src/utils/identifiers';

export interface ThemeState {
  theme: KEY_NAME.LIGHT | KEY_NAME.DARK;
  setTheme: (theme: KEY_NAME.LIGHT | KEY_NAME.DARK) => void;
}

type UserInfo = {
  name: string;
  id: string;
  email?: string;
  mtnId?: string;
  msisdn?: string;
};

export interface UserState {
  userData: UserInfo | null;
  setUserData: (userData: UserInfo) => void;
  clearUserData: () => void;
}
