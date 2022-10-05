import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories(){
    const stories = [
        {
            id: 1,
            nome: 'Perna',
            src: require('../assets/images/pernalonga.png'),
        },
        {
            id: 2,
            nome: 'Frajola',
            src: require('../assets/images/frajola.png'),
        },
        {
            id: 3,
            nome: 'Piu Piu',
            src: require('../assets/images/piupiu.png'),
        },
        {
            id: 4,
            nome: 'Patolino',
            src: require('../assets/images/patolino.png'),
        },
        {
            id: 5,
            nome: 'Taz',
            src: require('../assets/images/taz.png'),
        },
        {
            id: 6,
            nome: 'Felicia',
            src: require('../assets/images/felicia.jpg'),
        },
    ];

    function renderItem({ item }){
        return(
            <View style={styles.story}>

                <Image style={styles.imgstory} source={item.src}/>
                <Text>{item.nome}</Text>

            </View>
        );
    }

    return(
        
        <View style={styles.stories}>

            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

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