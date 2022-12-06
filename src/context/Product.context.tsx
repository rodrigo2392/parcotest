import React from 'react';
import {ContextType, Product} from '../types';

const contextDefaultValues: ContextType = {
  products: [],
  setProducts: (): void => {
    throw new Error('Function not implemented.');
  },
  addProduct: (): void => {
    throw new Error('Function not implemented.');
  },
  addQuantity: (): void => {
    throw new Error('Function not implemented.');
  },
  removeQuantity: (): void => {
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

  const addProduct = (product: Product) => {
    const found = products?.find(e => e.code === product.code);
    const cloneProducts = products ? [...products] : [];

    if (found) {
      found.quantity = found.quantity + 1;
      const newList = cloneProducts.filter(el => el.code === product.code);
      setProducts(newList);
    } else {
      if (products) {
        const newList = [...products, product];
        setProducts(newList);
      } else {
        const newList = [product];
        setProducts(newList);
      }
    }
  };

  const addQuantity = (product: Product) => {
    const cloneProducts = products ? [...products] : [];
    const productClone = {...product};
    const newQuantity = productClone.quantity + 1;
    productClone.quantity = newQuantity;
    const filteredList = cloneProducts.filter(el => el.code !== product.code);
    const newList = [...filteredList, productClone];
    setProducts(newList);
  };

  const removeQuantity = (product: Product) => {
    const cloneProducts = products ? [...products] : [];
    const productClone = {...product};
    const newQuantity = productClone.quantity - 1;
    product.quantity = newQuantity;
    const filteredList = cloneProducts.filter(el => el.code !== product.code);
    console.log({newQuantity});
    if (newQuantity > 0) {
      const newList = [...filteredList, product];
      setProducts(newList);
    } else {
      setProducts(filteredList);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        addQuantity,
        removeQuantity,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
