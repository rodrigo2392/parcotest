import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../types';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to add product"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  );
}
