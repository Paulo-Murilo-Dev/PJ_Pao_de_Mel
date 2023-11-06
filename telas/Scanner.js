// Scanner.js
import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { styles } from './styles';
import watermarkImage from '../src/img/qr_ghost.png';


const ScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    if (!scanned) {

      navigation.navigate('Lancar', { id: data });

      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <><View style={styles.container}>

      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>

        {scanned ? null : (
          <View style={styles.qrContainer}>
            <Image source={watermarkImage} style={styles.watermarkImage} />


          </View>
        )}
      </Camera>
    </View><View>
    
      </View></>
  );
};

export default ScannerScreen;
