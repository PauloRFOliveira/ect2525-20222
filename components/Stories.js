import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Stories(){
    return(
        
        <View style={styles.stories}>

            <View style={styles.story}>

                <Image style={styles.imgstory} source={require('../assets/images/pernalonga.png')}/>
                <Text>Perna</Text>

            </View>

            <View style={styles.story}>

                <Image style={styles.imgstory} source={require('../assets/images/frajola.png')}/>
                <Text>Frajola</Text>

            </View>

            <View style={styles.story}>

                <Image style={styles.imgstory} source={require('../assets/images/piupiu.png')}/>
                <Text>Piu Piu</Text>

            </View>

            <View style={styles.story}>

                <Image style={styles.imgstory} source={require('../assets/images/patolino.png')}/>
                <Text>Patolino</Text>

            </View>

            <View style={styles.story}>

                <Image style={styles.imgstory} source={require('../assets/images/taz.png')}/>
                <Text>Taz</Text>

            </View>
        
            <View style={styles.story}>

                <Image style={styles.imgstory} source={require('../assets/images/felicia.jpg')}/>
                <Text>Felicia</Text>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
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