import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';

const LancarScreen = () => {
  const route = useRoute(); 
  const id = route.params?.id || 0;
  
  console.log(id);

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  );
};

export default LancarScreen;
