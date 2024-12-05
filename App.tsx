import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppRootScreen from './src/screens/AppRootScreen/AppRootScreen';

function App(): React.JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 0,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRootScreen />
      </QueryClientProvider>
    </>
  );
}

export default App;
