import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Button, StyleSheet} from 'react-native';
import {RootStackParamList} from '../types';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddProduct'>;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Agregar manualmente"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Escanear producto"
          onPress={() => navigation.navigate('Scanner')}
        />
      </View>
      <View>
        <Button
          color="orange"
          title="Volver"
          onPress={() => navigation.navigate('Home')}
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
  buttonContainer: {
    marginBottom: 50,
  },
});
