import React from 'react';
import {QueryClientProvider} from 'react-query';
import AppRootScreen from 'src/screens/AppRootScreen/AppRootScreen';
import {ReactQueryClient} from 'src/utils/react-query';

function App(): React.JSX.Element {
  const queryClient = ReactQueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRootScreen />
      </QueryClientProvider>
    </>
  );
}

export default App;
