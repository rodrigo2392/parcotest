import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuantityControl from './QuantityControl';

export default function ProductItem() {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text>Image</Text>
        <Text>Product Item</Text>
        <QuantityControl />
      </View>
      <Text>Barcode</Text>
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
