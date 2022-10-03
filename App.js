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

        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/pernalonga.png')}/>
          <Text>Perna</Text>
        </View>

        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/frajola.png')}/>
          <Text>Frajola</Text>
        </View>

        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/piupiu.png')}/>
          <Text>Piu Piu</Text>
        </View>

        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/patolino.png')}/>
          <Text>Patolino</Text>
        </View>

        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/taz.png')}/>
          <Text>Taz</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  instagram: {
    height: 40,
    width: 110,
  },
  stories: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#fff',
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgstory: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});
