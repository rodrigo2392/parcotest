import * as React from 'react';
import Navigation from './src/navigation';
import ContextProvider from './src/context/Product.context';

export default function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}
