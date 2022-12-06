import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import QuantityControl from './QuantityControl';
import {Product} from '../types';

interface ItemProps {
  product: Product;
}
export default function ProductItem({product}: ItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
        <Text>{product.name}</Text>
        <QuantityControl product={product} />
      </View>
      <View style={styles.code}>
        <Text>code: {product.code}</Text>
      </View>
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
  image: {
    width: 50,
    height: 50,
  },
  code: {
    alignItems: 'center',
  },
});
