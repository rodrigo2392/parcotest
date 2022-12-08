import React, {useContext} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, StyleSheet, FlatList} from 'react-native';
import {RootStackParamList} from '../types';
import ProductItem from '../components/ProductItem';
import {ProductContext} from '../context/Product.context';
import {Product} from '../types';
import FooterList from '../components/FooterList';
import HeaderList from '../components/HeaderList';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function Home({navigation}: HomeProps) {
  const {products} = useContext(ProductContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        ListHeaderComponent={<HeaderList />}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={(item: Product) => item.code}
        style={styles.list}
        ListFooterComponent={
          <FooterList
            navigation={navigation}
            productSize={products?.length || 0}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  list: {
    flexGrow: 0,
  },
});
