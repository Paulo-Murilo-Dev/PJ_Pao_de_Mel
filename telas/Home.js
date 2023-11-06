import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';


    function HomeScreen({ navigation }) {
        return (
          
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Text style={styles.pjpaodemel}>Projeto Pão de mel</Text>
              <TouchableOpacity
                style={styles.scanButton}
                onPress={() => {
      
                  navigation.navigate('Camera');
                } }
              >
                <Text style={styles.scanButtonText }>Scan</Text>
              </TouchableOpacity>
                
      
      
            </View>
        );
      }


export default HomeScreen;
