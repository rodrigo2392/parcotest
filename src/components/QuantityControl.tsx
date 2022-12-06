import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {ProductContext} from '../context/Product.context';
import {Product} from '../types';

interface ItemProps {
  product: Product;
}

export default function QuantityControl({product}: ItemProps) {
  const {addQuantity, removeQuantity} = useContext(ProductContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.control}
        onPress={() => addQuantity(product)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{product.quantity}</Text>
      <TouchableOpacity
        style={styles.control}
        onPress={() => removeQuantity(product)}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  control: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#d7d4d3',
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 25,
  },
});
