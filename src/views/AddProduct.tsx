import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../types';

interface HomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddProduct'>;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <Text>AddProduct</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
