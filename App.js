//React native básicos
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//telas
import ScannerScreen from './telas/Scanner';
import LancarScreen from './telas/Lancar';
import HomeScreen from './telas/Home';

//estilos
import { styles } from './telas/styles';

//SQLITE
import * as SQLite from 'expo-sqlite';


function CameraScreen({ navigation }) {
  return (
    <>
      <ScannerScreen navigation={navigation} />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.scanButtonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Lancar');
          }}
        >
          <Text style={styles.scanButtonText}>fake scan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#38b0DE',
          },
          headerTintColor: 'white',
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Lancar" component={LancarScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
