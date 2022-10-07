import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, FlatList, Image} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ChatListScreen(){
    const [chatlist, setChatlist] = useState([]);

    useEffect(function (){
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist');
            const chatlist = await response.json();
            setChatlist(chatlist)
        }
        getData();
    }, [])

    function renderItem({ item }){
        return(
            <View style={styles.chat}>

                <Image style={styles.imgChat} source={{ uri: item.imgPerfilUri}}/>
                <View style={styles.chatText}>

                    <Text style={styles.nome}>{item.nomeUsuario}</Text>
                    <Text>{item.ultimaMensagem}</Text>

                </View>

            </View>
        );
    }

    return(
        <View style={styles.container}>

            <StatusBar style="auto"/>
            
            <FlatList
                data={chatlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chat: {
        height: 60,
        flexDirection: "row",
        paddingLeft: 10,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    imgChat: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
    },
    nome: {
        fontWeight: "bold",
    },
});