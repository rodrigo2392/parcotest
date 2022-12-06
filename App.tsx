import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigation from './src/navigation';
import ContextProvider from './src/context/Product.context';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Navigation />
      </ContextProvider>
    </QueryClientProvider>
  );
}
