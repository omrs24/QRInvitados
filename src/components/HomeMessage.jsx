
import React, {Component}from 'react';
import {
    Dimensions ,
    TouchableOpacity,
    Image,
    Text,
    View,
  } from 'react-native';
import nav from '@react-navigation/native';
import styles from '../scanstyle';

export default class HomeMesage extends Component {
    constructor(props) {
        super()
        this.navigation = props.navigation1
        this.qrData = props.qrData
        console.log("Props content: ")
        console.log(props)
    }

    render() {
        
        return(
            <View style={{ flexDirection: 'column',justifyContent: 'center', height: Dimensions.get('screen').height}}>
                <View>
                    <Text>Escanea</Text>
                    <TouchableOpacity style={styles.buttonScan} onPress={ () => this.navigation.navigate('Scanner') }>
                    <View style={styles.buttonWrapper}>
                        <Image source={require('../../assets/camera.png')} style={{height: 36, width: 36}}></Image>
                        <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
                    </View>
                    </TouchableOpacity>
                    <Text style={{color: '#000'}}>Datos Escaneados: </Text>
                    <Text id="lblData" style={{color: '#000'}}>{this.qrData}</Text>
                </View>
            </View>
        )
    }
}

// Recibe el stack de navegacion
/*const HomeMesage = (props) =>{

    React.useEffect(() => {
        if (props.route.params?.qrData) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server

            getElement
        }
    }, [props.route.params?.qrData]);

    return (
        
    );

}

export default HomeMesage*/