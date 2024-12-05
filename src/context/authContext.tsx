import React from 'react';
type AuthContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};
type Props = {
  children?: React.ReactNode;
};
const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = React.useState<string | null>(null);

  const value: any = {user, setUser};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthContextProvider};
