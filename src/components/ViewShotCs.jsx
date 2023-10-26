
import React, {Component, useRef, useState, useCallback, useEffect}from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    RefreshControl,
  } from 'react-native';
import ViewShot from "react-native-view-shot";
import Btn from './Btn';
import RNFS from "react-native-fs"

const ViewshootCs = () => {

    const full = useRef();
  const [preview, setPreview] = useState(null);
  const [preview1, setPreview1] = useState(null);
  const [itemsCount, setItemsCount] = useState(10);
  const [refreshing, setRefreshing] = useState(false);

  const onCapture = useCallback(() => {
    full.current.capture().then(function(uri){ 
        setPreview({ uri })
        let destinationPath = RNFS.DocumentDirectoryPath + "/gafete.png"

        console.log(uri)
        console.log(destinationPath)

        RNFS.copyFile(uri, destinationPath).then(result => {
          console.log("Archivo copiado",result)
          setPreview1({ destinationPath })
        })
        .catch(error => {
          console.log('There has been a problem with your fetch operation: ', error);
           // ADD THIS THROW error
            throw error;
          });

        
    })
    
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.root}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setItemsCount(itemsCount + 10);
              setRefreshing(false);
            }, 5000);
          }}
        />
      }
    >
      <SafeAreaView>
        <ViewShot ref={full} style={styles.container}>
          <Btn onPress={onCapture} label="Shoot Me" />

          <Image
            fadeDuration={0}
            resizeMode="contain"
            style={styles.previewImage}
            source={preview1}
          />

          {Array(itemsCount)
            .fill(null)
            .map((_, index) => ({
              key: index,
              text: `${index + 1}`,
              color: `hsl(${(index * 13) % 360}, 50%, 80%)`,
            }))
            .map(({ key, text, color }) => {
              return (
                <View style={[styles.item, { backgroundColor: color }]} key={key}>
                  <Text style={styles.itemText}>{text}</Text>
                </View>
              );
            })}
        </ViewShot>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00',
  },
  root: {
    paddingVertical: 20,
  },
  content: {
    backgroundColor: '#000',
  },
  item: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 22,
    color: '#666',
  },
  previewImage: {
    height: 200,
    backgroundColor: 'black',
  },
});

ViewshootCs.navigationProps = {
  title: 'Viewshoot',
};



export default ViewshootCs
