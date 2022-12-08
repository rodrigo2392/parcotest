import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RootStackParamList} from '../types';

interface FooterProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  productSize: number;
}

export default function FooterList({navigation, productSize}: FooterProps) {
  return (
    <>
      <View style={styles.noItemContainer}>
        {productSize === 0 && <Text>No tienes productos agregados</Text>}
      </View>
      <View style={styles.scanButton}>
        <Button
          color="orange"
          title="Escanear producto"
          onPress={() => navigation.navigate('Scanner')}
        />
      </View>
      <View style={styles.addButton}>
        <Button
          title="Agregar Manualmente"
          onPress={() => navigation.navigate('AddProduct')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  noItemContainer: {
    alignItems: 'center',
  },
  scanButton: {
    marginTop: 50,
  },
  addButton: {
    marginTop: 20,
  },
});
