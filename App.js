import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Flatlist } from 'react-native';
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
        
        <View style={styles.story}>

          <Image style={styles.imgstory} source={require('./assets/images/felicia.jpg')}/>
          <Text>Felicia</Text>

        </View>

      </View>

      <View style={styles.feed}>
        
        <View style={styles.post}>

          <View style={styles.postHeader}>
            
            <View style={styles.postHeaderInfo}>

              <Image style={styles.postHeaderImage} source={require('./assets/images/piupiu.png')}/>
              <Text>Piu Piu</Text>

            </View>

            <FontAwesome5 name="ellipsis-h" size={24}  color="black"/>

          </View>

          <Image style={styles.postImage} aspectRatio={1.333} source={require('./assets/images/tinytoons.jpg')}/>

          <View style={styles.postFooter}>

            <FontAwesome5 style={styles.postFooterIcons} name="heart" size={36} color="black"/>
            <FontAwesome5 styçe={styles.postFooterIcons} name="comment" size={36} color="black"/>

          </View>

        </View>

        <View style={styles.post}>

          <View style={styles.postHeader}>
            
            <View style={styles.postHeaderInfo}>

              <Image style={styles.postHeaderImage} source={require('./assets/images/patolino.png')}/>
              <Text>Patolino</Text>

            </View>

            <FontAwesome5 name="ellipsis-h" size={24} color="black"/>

          </View>

          <Image style={styles.postImage} aspectRatio={1.776} source={require('./assets/images/tinytoons2.jpg')}/>

          <View style={styles.postFooter}>

            <FontAwesome5 style={styles.postFooterIcons} name="heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postFooterIcons} name="comment" size={36} color="black"/>

          </View>

        </View>

        <View style={styles.post}>

          <View style={styles.postHeader}>

            <View style={styles.postHeaderInfo}>

              <Image style={styles.postHeaderImage} source={require('./assets/images/felicia.jpg')}/>
              <Text>Felicia</Text>

            </View>

            <FontAwesome5 name="ellipsis-h" size={24} color="black"/>

          </View>

          <Image style={styles.postImage} aspectRatio={1.333} source={require('./assets/images/looneytoons.jpg')}/>

          <View style={styles.postFooter}>

            <FontAwesome5 style={styles.postFooterIcons} name="heart" size ={36} color="black"/>
            <FontAwesome5 style={styles.postFooterIcons} name="comment" size={36} color="black"/>

          </View>

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
<<<<<<< HEAD
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
  feed: {
    flex: 1,
  },
  post: {
    
  },
  postHeader: {
    flexDirection: 'row',
    padding: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postHeaderImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postHeaderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: undefined,
  },
  postFooter: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  postFooterIcons: {
    marginRight: 10,
  }
});
=======
});
>>>>>>> e45212b (Criação dos Pacotes)
