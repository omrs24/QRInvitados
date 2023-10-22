
import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, Dimensions, ImageBackground, BackHandler } from 'react-native';
import { Camera, CameraPermissionStatus, useCameraDevice, useCameraPermission, useCodeScanner, CameraDevice } from 'react-native-vision-camera';

const CameraScanner = (navigation) => {

    const [postText, setPostText] = React.useState('');

    const cameraClassHd = { display: 'none'}
    const cameraClassV = { height: Dimensions.get('screen').height,
                            display: 'block'}
    const device = useCameraDevice('back')
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(codes[0].value)
            setPostText()
            navigation.navigate({
                name: 'Home',
                params: { qrData: codes[0].value },
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
    );

}

export default CameraScanner