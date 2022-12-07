import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem('@parco_products', value);
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido un error al guardar el producto');
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@parco_products');
    if (value !== null) {
      return value;
    }
    return [];
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido un error al obtener el producto');
  }
};
