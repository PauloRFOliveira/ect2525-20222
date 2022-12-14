import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){
    const [feed, setFeed] = useState([]);

    useEffect(function (){
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
            const feed = await response.json();
            setFeed(feed)
        }
        getData();
    }, [])

    function renderItem({ item }){
        return(
            <View style={styles.post}>

                <View style={styles.postHeader}>

                    <View style={styles.postHeaderInfo}>

                        <Image style={styles.postHeaderImage} source={{ uri: item.imgPerfilUri }}/>
                        <Text>{item.nomeUsuario}</Text>

                    </View>

                    <FontAwesome5 name="ellipsis-h" size={24}  color="black"/>

                </View>

                <Image style={styles.postImage} aspectRatio={item.aspectRatio} source={{ uri: item.imgPostUri }}/>

                <View style={styles.postFooter}>

                    <FontAwesome5 style={styles.postFooterIcons} name="heart" size={36} color="black"/>
                    <FontAwesome5 style={styles.postFooterIcons} name="comment" size={36} color="black"/>

                </View>

            </View>
        );
    }

    return(
        <View style={styles.feed}>
        
            <FlatList
                data={feed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

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