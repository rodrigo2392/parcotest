import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuantityControl from './QuantityControl';
import {Product} from '../types';

interface ItemProps {
  product: Product;
}
export default function ProductItem({product}: ItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text>{product.image}</Text>
        <Text>{product.name}</Text>
        <QuantityControl product={product} />
      </View>
      <Text>{product.code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  productContainer: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
