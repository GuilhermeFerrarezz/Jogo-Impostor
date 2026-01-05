import { Image, Pressable } from 'react-native';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

import { getTempo, adicionarTempo } from '../services/dados.jsx';
export default function Tempo() {
    const [tempo, setTempo] = useState(0)

    const carregar = async () => {
        const tempo = await getTempo();
        setTempo(tempo);
    }


    const adicionar = async () => {
        const tempo = parseInt(await getTempo())
        await adicionarTempo(tempo + 1)
        carregar()

    }
    const diminuir = async () => {
        const tempo = parseInt(await getTempo())
        if (tempo > 0) {
            await adicionarTempo(tempo - 1)
        }

        carregar()

    }



    return (
        <View style={styles.TimerContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Timer</Text>
            <View style={styles.TimerPerfil}>
                <TextInput style={styles.input} placeholder={' Min: ' + tempo} placeholderTextColor={'#000000ff'} ></TextInput>
                <Pressable onPress={adicionar}><Entypo name="plus" size={28} color="black" /></Pressable>
                <Pressable onPress={diminuir}><Entypo name="minus" size={28} color="black" /></Pressable>
            </View>
        </View>

    )

}

const styles = {
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 17,
        width: '20%',
        height: 40,
        marginLeft: 0,
        marginTop: 10,

    },


    TimerPerfil: {
        marginTop: 2,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    TimerContainer: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 10,
        backgroundColor: '#f7f3f3ff',
        borderRadius: 10,
        width: '85%',
        minHeight: 120,
        justifyContent: 'left',
    }






}