import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const CardToPDF = (props) => { 

}

const createPDF = async () => {
        
    try{
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Gafete Inivitado</title>
            <style>
                .container{
                    
                    background-color: transparent;
                    border-width: 5px;
                    border-color: #000;
                    border-radius: 20px;
                    height: 550px;
                    width: 450px;
                    flex-direction: column;
                }
                .header{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color: #223B6F;
                    border-top-left-radius: 18px;
                    border-top-right-radius: 18px;
                    justify-content: center;
                    height: 130px;
                }
                .footer{
                    display: flex;
                    flex-direction: row;
                    background-color: #223B6F;
                    border-bottom-left-radius: 18px;
                    border-bottom-right-radius: 18px;
                    justify-content: center;
                    height: 90px;
                }
                .logo_somus{
                    width: 190px;
                    height: 120px;
                }
                .body{
                    height: 330px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .card-header{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }
                .card-body{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }
        
            </style>
        </head>
        <body>
        
            <div class="container">
        
                <div class="header">
                    <img src="https://www.som.us/wp-content/uploads/2021/09/LogoSomusMenu-1.png" alt="logo_somus" srcset="" class="logo_somus">
                </div>
        
                <div class="body">
                    <div class="card-header">
                        <h1>INVITADO</h1>
                    </div>
                    
                    <div class="card-body">
                        <span>Nombre de la Persona</span>
                        <span>Correo de la persona</span>
                        <span>Empresa</span>
                    </div>
                    
                </div>
        
                <div class="footer">
        
                </div>
            </div>
            
        </body>
        </html>`
        const options = {
            html,
            fileName: `gafete`,
            directory: 'pdfs',
        };
        const file = await RNHTMLtoPDF.convert(options);
        Alert.alert('Success', `PDF saved to ${file.filePath}`);

    }catch (error) {
        Alert.alert('Error', error.message);
    }

}

export default CardToPDF