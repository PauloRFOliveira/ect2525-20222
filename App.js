import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.instagram} source={require('./assets/images/instagram.png')}/>
        <FontAwesome5 name='paper-plane' size={24} color='black'/>
      </View>
      <View style={styles.stories}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stories: {
    height: 90,
    backgroundColor: '#00f',
  },
  instagram: {
    height: 40,
    width: 110,
  },
});
