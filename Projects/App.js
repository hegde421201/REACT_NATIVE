import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BarcodeScanner from './src/BarcodeScanner';
import QRCodeScanner from './src/QRCodeScanner';

//define the navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Barcode">
        <Stack.Screen name="Barcode" component={BarcodeScanner} />
        <Stack.Screen name="QRCode" component={QRCodeScanner} />

        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
