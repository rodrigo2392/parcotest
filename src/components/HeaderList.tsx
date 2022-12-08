import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FooterList() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Lista de venta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
