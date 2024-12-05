import React from 'react';

export interface DataContextType {
  data: any;
  setData: (data: any) => void;
}

interface DataProviderProps {
  children?: React.ReactNode;
}

export const DataContext = React.createContext<DataProviderProps | null>(null);

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The DataProvider component wraps its children with the DataContext.Provider
 * component, passing an empty object as the value. This allows the children to
 * access the DataContext using the useContext hook.
 *
/******  8b51cb35-2c10-4ec6-9fab-16bf95a45514  *******/
export const DataProvider = ({children}: DataProviderProps) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};
