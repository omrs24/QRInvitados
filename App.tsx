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
    /*<View style={{ flexDirection: 'column',justifyContent: 'center', height: Dimensions.get('screen').height}}>
        <View>
            <Text>Escanea</Text>
            <TouchableOpacity style={styles.buttonScan} onPress={ () => navigation.navigate('Scanner') }>
            <View style={styles.buttonWrapper}>
                <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
            </View>
            </TouchableOpacity>
            <Text style={{color: '#000'}}>Datos Escaneados: </Text>
            <Text id="lblData" style={{color: '#000'}}>{route.params?.qrData}</Text>
        </View>
    </View>*/
  );
}

function ScannerScreen({navigation}) {
    return (
        <CameraScanner {...navigation}/>
    );

    /*const [postText, setPostText] = React.useState('');
    const cameraClassHd = { display: 'none'}
    const cameraClassV = { height: Dimensions.get('screen').height,
                            display: 'block'}
    const device = useCameraDevice('back')
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(codes[0].value)
            navigation.navigate({
                name: "Home",
                params: { 
                    qrData: codes[0].value 
                },
                merge: true,
              })
        }
    })

    return(
        <View>
            <Camera
                codeScanner={codeScanner}
                style={cameraClassV}
                device={device}
                isActive={true}/>
        </View>
    );*/
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
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"  component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Scanner'}} />
            <Stack.Screen name="ViewShotCs" component={ViewShotCsScreen} options={{ title: 'ViewShotCs'}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
