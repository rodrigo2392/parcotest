import React from 'react';
import {ContextType, Product} from '../types';

const contextDefaultValues: ContextType = {
  products: [],
  setProducts: (): void => {
    throw new Error('Function not implemented.');
  },
};

export const ProductContext =
  React.createContext<ContextType>(contextDefaultValues);

interface ProviderProps {
  children: React.ReactElement;
}

export default function ProductContextProvider({children}: ProviderProps) {
  const [products, setProducts] = React.useState<Product[] | undefined>([]);
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
