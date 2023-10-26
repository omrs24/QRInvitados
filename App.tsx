/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Dimensions ,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMessage from './src/components/HomeMessage'
import CameraScanner from './src/components/CameraScanner';
import ViewShotCs from './src/components/ViewShotCs';
import { Camera, CameraPermissionStatus, useCameraDevice, useCameraPermission, useCodeScanner, CameraDevice } from 'react-native-vision-camera';
import styles from './src/scanstyle';

function HomeScreen({navigation, route}) {
    
    let data = {
        route1: route,
        navigation1: navigation,
    }

    React.useEffect(() => {
        if (route.params?.qrData) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            //console.log(data)

            
        }
      }, [route.params?.qrData]);
    
  return (
    <HomeMessage {...data}/>
  );
}

function ScannerScreen({navigation}) {
    return (
        <CameraScanner {...navigation}/>
    );
}

function ViewShotCsScreen(){
    return (
        <ViewShotCs />
    );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewShotCs">
            <Stack.Screen name="Home"  component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Scanner'}} />
            <Stack.Screen name="ViewShotCs" component={ViewShotCsScreen} options={{ title: 'ViewShotCs'}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
