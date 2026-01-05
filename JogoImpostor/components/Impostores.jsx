import { Image, Pressable } from 'react-native';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { salvarJogador, getJogadores, removeJogador, adicionarNumeroImpostores, getNumeroImpostores } from '../services/dados.jsx';
import Entypo from '@expo/vector-icons/Entypo';
import { useState, useEffect } from 'react';


export default function Impostores() {
    const [numeroImpostores, setNumeroImpostores] = useState(1)
    const [message, setMessage] = useState('')
    useEffect(
        () => {
            const atualizarNumeroImpostores = async () => {
                adicionarNumeroImpostores(numeroImpostores);
            }
            atualizarNumeroImpostores();
        }
        ,
        []
    )


    const carregar = async () => {
        const numeroImpostores = await getNumeroImpostores();
        if (numeroImpostores == null) {
            setNumeroImpostores('1')
        } else {
            setNumeroImpostores(numeroImpostores);
        }

    }


    const aumentar = async () => {
        const lista = await getJogadores();
        const numeroJogadores = lista.length;
        const numeroImpostores = parseInt(await getNumeroImpostores())

        console.log(numeroImpostores)
        console.log(numeroJogadores)
        if ((numeroJogadores - numeroImpostores) > 4) {
            adicionarNumeroImpostores(numeroImpostores + 1);
            setMessage('');
        } else {
            setMessage('Aumente o número de jogadores');
        }
        carregar()
    }



    const diminuir = async () => {
        const numeroImpostores = parseInt(await getNumeroImpostores())
        if (numeroImpostores > 1) {
            adicionarNumeroImpostores(numeroImpostores - 1);
        }

        setMessage('');
        carregar()

    }











    return (
        <View style={styles.ImpostoresContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Impostores</Text>
            <View style={styles.ImpostoresPerfil}>
                <TextInput style={styles.input} placeholder={'  N°  ' + numeroImpostores} placeholderTextColor={'#000000ff'} onChangeText={(numero) => setNumeroImpostores(numero)} ></TextInput>
                <Pressable onPress={aumentar}><Entypo name="plus" size={28} color="black" /></Pressable>
                <Pressable onPress={diminuir}><Entypo name="minus" size={28} color="black" /></Pressable>
            </View>
            <Text style={{ color: 'red' }}>{message}</Text>

        </View>

    )



}

const styles = {
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 17,
        width: '15%',
        height: 40,
        marginLeft: 0,
        marginTop: 10,

    },


    ImpostoresPerfil: {
        marginTop: 2,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ImpostoresContainer: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 10,
        backgroundColor: '#f7f3f3ff',
        borderRadius: 10,
        width: '85%',
        height: 140,
        justifyContent: 'left',
    }






}