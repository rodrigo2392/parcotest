import * as React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Product, RootStackParamList} from '../types';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {useGetCategories} from '../services/product.services';
import {ProductContext} from '../context/Product.context';

interface ScannerProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Scanner'>;
}

export default function Scanner({navigation}: ScannerProps) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.CODE_128], {
    checkInverted: true,
  });
  const devices = useCameraDevices();
  const device = devices.back;
  const {addProduct} = React.useContext(ProductContext);

  const {data, isFetched, error} = useGetCategories(barcodes[0]?.displayValue);

  React.useEffect(() => {
    if (barcodes.length > 0 && data && isFetched) {
      const newProduct = {
        name: data.product.generic_name,
        image: data.product.image_front_small_url,
        quantity: 1,
        code: barcodes[0].displayValue,
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
  }, [barcodes, addProduct, data, isFetched, navigation, error]);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  if (device != null && hasPermission) {
    return (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
        {barcodes.map((barcode, idx) => (
          <Text key={idx} style={styles.barcodeTextURL}>
            {barcode.displayValue}
          </Text>
        ))}
      </>
    );
  }

  return (
    <View>
      <Text>La cámara no está disponible</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
