
import React, {Component}from 'react';
import {
    Dimensions ,
    TouchableOpacity,
    Image,
    Text,
    View,
    ImageBackground,
    Alert,
    Pressable
  } from 'react-native';
import styles from '../scanstyle';
/* para eliminar
import ViewShot from "react-native-view-shot";
*/
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

/** Imprimir PDF */


export default class HomeMesage extends Component {
    constructor(props) {
        super()
        this.props = props
        //console.log("Props content: ")
        
    }

    render() {
        console.log(this.props.route1.params?.qrData)

        var qrData = this.props.route1.params?.qrData

        if(qrData)
        {
            var splData = qrData.split("|")

            var nombreQR = splData[0]
            var correoQR = splData[1]
            var empresaQR = splData[2]
        }
        
        

        

        return(
            <View style={{ flexDirection: 'column', 
                            height: Dimensions.get('screen').height}}>

                <View style={{flexDirection: 'row',
                            justifyContent: 'space-evenly'}}>
                    <TouchableOpacity style={styles.buttonScan} onPress={ () => this.props.navigation1.navigate('Scanner') }>
                        <View style={styles.buttonWrapper}>
                            <Image source={require('../../assets/camera.png')} style={{height: 36, width: 36}}></Image>
                            <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <Pressable style={styles.button} onPress={() => createPDF()}>
                        <Text style={styles.text}>Generate PDF</Text>
                    </Pressable>
                </View>{/* Final de Boton para escanear */}
                

                <View style={styles.container}>

                    <View style={[styles.header]}>
                        <Image style={styles.logosomus} source={require('../../assets/logo_somus.png')}></Image>
                    </View>{/* Fin de cabezera */}

                    <View>
                        <Text style={styles.text_h1}>INVITADO</Text>
                        {/*<Text id="lblData" style={{color: '#000'}}>{qrData}</Text>*/}
                        <View style={styles.body_spacer}></View>
                        <Text id="lblNombre" style={styles.text_h3}>{nombreQR ?? 'Nombre de la Persona'}</Text>
                        <Text id="lblCorreo" style={[styles.text_h3, {display: 'none'}]}>{correoQR ?? 'correo.prueba@prueba.com'}</Text>
                        <Text id="lblEmpresa" style={styles.text_h5}>{empresaQR ?? 'Empresa de Prueba'}</Text>

                    </View>{/* Fin de cuerpo */}


                    <View style={styles.footer}>

                    </View>{/* Fin de Footer */}
                    
                    
                </View>{/* Final de contenedor */}
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