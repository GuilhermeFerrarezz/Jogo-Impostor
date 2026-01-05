import { Image, Pressable } from 'react-native';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';





export default function Categorias({ colorBackground, color, text, onClick }) {
    const [pressionado, setPressionado] = useState(false)
    useFocusEffect(
        useCallback(() => {
            const load = async () => {
                setPressionado(false)
            };

            load();
        }, [])
    )











    const temaSelecionado = async () => {


        setPressionado(!pressionado)
        onClick(text, !pressionado)

    }



    return (
        <View >
            <Pressable onPress={temaSelecionado} ><Text style={[styles.Pressable, pressionado ? { backgroundColor: colorBackground, color: color } : { backgroundColor: '#D9D9D9', color: 'black' }]} >{text}</Text></Pressable>
        </View>




    )



}

const styles = {

    Pressable: {
        padding: 2,
        marginTop: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        borderRadius: 5,
        fontSize: 15,
        textAlign: 'left',
        borderRadius: 15

    }






}