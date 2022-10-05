import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){
    return(
        <View style={styles.feed}>
        
            <View style={styles.post}>

                <View style={styles.postHeader}>
            
                    <View style={styles.postHeaderInfo}>

                        <Image style={styles.postHeaderImage} source={require('../assets/images/piupiu.png')}/>
                        <Text>Piu Piu</Text>

                    </View>

                    <FontAwesome5 name="ellipsis-h" size={24}  color="black"/>

                </View>

                <Image style={styles.postImage} aspectRatio={1.333} source={require('../assets/images/tinytoons.jpg')}/>

                <View style={styles.postFooter}>

                    <FontAwesome5 style={styles.postFooterIcons} name="heart" size={36} color="black"/>
                    <FontAwesome5 styçe={styles.postFooterIcons} name="comment" size={36} color="black"/>

                </View>

            </View>

            <View style={styles.post}>

                <View style={styles.postHeader}>
            
                    <View style={styles.postHeaderInfo}>

                        <Image style={styles.postHeaderImage} source={require('../assets/images/patolino.png')}/>
                        <Text>Patolino</Text>

                    </View>

                    <FontAwesome5 name="ellipsis-h" size={24} color="black"/>

                </View>

                <Image style={styles.postImage} aspectRatio={1.776} source={require('../assets/images/tinytoons2.jpg')}/>

                <View style={styles.postFooter}>

                    <FontAwesome5 style={styles.postFooterIcons} name="heart" size={36} color="black"/>
                    <FontAwesome5 style={styles.postFooterIcons} name="comment" size={36} color="black"/>

                </View>

            </View>

            <View style={styles.post}>

                <View style={styles.postHeader}>

                    <View style={styles.postHeaderInfo}>

                        <Image style={styles.postHeaderImage} source={require('../assets/images/felicia.jpg')}/>
                        <Text>Felicia</Text>

                    </View>

                    <FontAwesome5 name="ellipsis-h" size={24} color="black"/>

                </View>

                <Image style={styles.postImage} aspectRatio={1.333} source={require('../assets/images/looneytoons.jpg')}/>

                <View style={styles.postFooter}>

                    <FontAwesome5 style={styles.postFooterIcons} name="heart" size ={36} color="black"/>
                    <FontAwesome5 style={styles.postFooterIcons} name="comment" size={36} color="black"/>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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