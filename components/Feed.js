import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){
    const feed = [
        {
            id: 1,
            nome: 'Piu Piu',
            imgPerfil: require('../assets/images/piupiu.png'),
            imgPost: require('../assets/images/tinytoons.jpg'),
            aspectRatio: 1.333,
        },
        {
            id: 2,
            nome: 'Patolino',
            imgPerfil: require('../assets/images/patolino.png'),
            imgPost: require('../assets/images/tinytoons2.jpg'),
            aspectRatio: 1.776,
        },
        {
            id: 3,
            nome: 'Felicia',
            imgPerfil: require('../assets/images/felicia.jpg'),
            imgPost: require('../assets/images/looneytoons.jpg'),
            aspectRatio: 1.333,
        },
    ];

    function renderItem({ item }){
        return(
            <View style={styles.post}>

                <View style={styles.postHeader}>

                    <View style={styles.postHeaderInfo}>

                        <Image style={styles.postHeaderImage} source={item.imgPerfil}/>
                        <Text>{item.nome}</Text>

                    </View>

                    <FontAwesome5 name="ellipsis-h" size={24}  color="black"/>

                </View>

                <Image style={styles.postImage} aspectRatio={item.aspectRatio} source={item.imgPost}/>

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