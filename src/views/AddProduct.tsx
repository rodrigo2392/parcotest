import React, {useState} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Button, StyleSheet, TextInput, Alert} from 'react-native';
import {ProductContext} from '../context/Product.context';
import {useGetCategories} from '../services/product.services';
import {Product, RootStackParamList} from '../types';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddProduct'>;
}

export default function Home({navigation}: HomeProps) {
  const [text, setText] = useState<string | undefined>(undefined);
  const {data, isFetched, error} = useGetCategories(text);
  const {addProduct} = React.useContext(ProductContext);
  const searchProduct = () => {
    console.log({data});
    if (
      text &&
      data &&
      isFetched &&
      data?.status_verbose !== 'no code or invalid code' &&
      data?.status_verbose !== 'product not found'
    ) {
      const newProduct = {
        name: data.product.generic_name,
        image: data.product.image_front_small_url,
        quantity: 1,
        code: text,
      } as unknown as Product;
      addProduct(newProduct);
      navigation.navigate('Home');
    } else if (
      error ||
      data?.status_verbose === 'no code or invalid code' ||
      data?.status_verbose === 'product not found'
    ) {
      Alert.alert('Error', 'El producto no fue encontrado, revisa el código.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Escribe el código del proudcto..."
          style={styles.input}
          value={text}
          onChangeText={(t: string) => setText(t)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Buscar producto" onPress={searchProduct} />
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
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
  },
});
