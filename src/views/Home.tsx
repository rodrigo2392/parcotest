import React, {useContext} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Button, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../types';
import ProductItem from '../components/ProductItem';
import {ProductContext} from '../context/Product.context';
import {Product} from '../types';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function Home({navigation}: HomeProps) {
  const {products} = useContext(ProductContext);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lista de venta</Text>
      </View>
      {products?.map((product: Product) => (
        <ProductItem product={product} />
      ))}
      {products?.length === 0 && (
        <View style={styles.noItemContainer}>
          <Text>No tienes productos agregados</Text>
        </View>
      )}

      <View style={styles.addButton}>
        <Button
          title="Agregar Producto"
          onPress={() => navigation.navigate('AddProduct')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  noItemContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    marginTop: 20,
  },
});
