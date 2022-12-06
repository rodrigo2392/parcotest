export type RootStackParamList = {
  Home: undefined;
  AddProduct: undefined;
  Scanner: undefined;
};
export interface Product {
  name: string;
  image: string;
  quantity: number;
  code: string;
}

export interface ContextType {
  products: Product[] | undefined;
  setProducts: (value?: Product[] | undefined) => void;
  addProduct: (value: Product) => void;
  addQuantity: (value: Product) => void;
  removeQuantity: (value: Product) => void;
}
