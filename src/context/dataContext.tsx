import React from 'react';

export interface DataContextType {
  data: any;
  setData: (data: any) => void;
}

interface DataProviderProps {
  children?: React.ReactNode;
}

export const DataContext = React.createContext<DataProviderProps | null>(null);

export const DataProvider = ({children}: DataProviderProps) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};
