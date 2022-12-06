import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function QuantityControl() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.control}
        onPress={() => setValue(prev => prev + 1)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{value || 0}</Text>
      <TouchableOpacity
        style={styles.control}
        onPress={() => setValue(prev => (prev > 0 ? prev - 1 : 0))}>
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
