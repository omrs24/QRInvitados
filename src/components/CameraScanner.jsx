
import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, Dimensions, ImageBackground, BackHandler } from 'react-native';
import { Camera, CameraPermissionStatus, useCameraDevice, useCameraPermission, useCodeScanner, CameraDevice } from 'react-native-vision-camera';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class CameraScanner extends Component {

    codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {

            console.log(`Scanned ${codes.length} codes!`)
            
            this.state.csQRScann.isActive = false
            this.state.csQRScann.style = cameraClassHd
        }
    })
    device = useCameraDevice('back')

    constructor (props) {
        super(props);
        this.state={
            cameraClassHd: {
                display: 'none'
            },
            cameraClassV: {
                heigh: deviceHeight,
                display: 'block'
            }
        }
        this.login = this.login.bind(this); // you need this to be able to access state from login
    }

    render(){
        return (
            <Camera
                codeScanner={codeScanner}
                style={cameraClassV}
                device={device}
                isActive={false}
                id='csQRScann'/>
        )
    }

}

export default CameraScanner
