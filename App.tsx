/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions ,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CameraScanner from './src/components/CameraScanner';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

function App(): JSX.Element {


  return (
    
    <View style={{ flexDirection: 'column',justifyContent: 'center', backgroundColor: 'red', height: deviceHeight}}>
      <View>
        <Text>Escanea</Text>
        <TouchableOpacity style={styles.buttonScan}>
          <View style={styles.buttonWrapper}>
            <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
            <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
          </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = {
  scrollViewStyle: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#2196f3'
  },
  header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '10%',
      paddingLeft: 15,
      paddingTop: 10,
      width: deviceWidth,
  },
  textTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      padding: 16,
      color: 'white'
  },
  textTitle1: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      padding: 16,
      color: 'white'
  },
  cardView: {
      width: deviceWidth - 32,
      height: deviceHeight - 350,
      alignSelf: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 10,
      padding: 25,
      marginLeft: 5,
      marginRight: 5,
      marginTop: '10%',
      backgroundColor: 'white'
  },
  scanCardView: {
      width: deviceWidth - 32,
      height: deviceHeight / 2,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: 25,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      backgroundColor: 'white'
  },
  buttonWrapper: {
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center'
  },
  buttonScan: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#258ce3',
      paddingTop: 5,
      paddingRight: 25,
      paddingBottom: 5,
      paddingLeft: 25,
      marginTop: 20
  },
  buttonScan2: {
      marginLeft: deviceWidth / 2 - 50,
      width: 100,
      height: 100,
  },
  descText: {
      padding: 16,
      textAlign: 'center',
      fontSize: 16
  },
  highlight: {
      fontWeight: '700',
  },
  centerText: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18,
      padding: 32,
      color: 'white',
  },
  textBold: {
      fontWeight: '500',
      color: '#000',
  },
  bottomContent: {
     width: deviceWidth,
     height: 120,
  },
  buttonTouchable: {
      fontSize: 21,
      backgroundColor: 'white',
      marginTop: 32,
      width: deviceWidth - 62,
      justifyContent: 'center',
      alignItems: 'center',
      height: 44
  },
  buttonTextStyle: {
      color: 'black',
      fontWeight: 'bold',
  }
}

export default App;
