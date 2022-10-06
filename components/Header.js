import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}){
    return(

        <View style={styles.header}>

            <Image style={styles.instagram} source={require('../assets/images/instagram.png')}/>
            <FontAwesome5 name='paper-plane' size={24} color='black' onPress={() => navigation.navigate('ChatListScreen')}/>

        </View>
    );
}

const styles = StyleSheet.create({
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
});