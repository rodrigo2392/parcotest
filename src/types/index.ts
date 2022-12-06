export type RootStackParamList = {
  Home: undefined;
  AddProduct: undefined;
  Scanner: undefined;
};
export interface Product {
  name: string;
  image: string;
  quantity: string;
  code: string;
}

export interface ContextType {
  products: Product[] | undefined;
  setProducts: (value?: Product[] | undefined) => void;
}
