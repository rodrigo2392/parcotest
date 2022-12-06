import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Button, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../types';
import ProductItem from '../components/ProductItem';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lista de venta</Text>
      </View>
      <ProductItem />
      <ProductItem />
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
