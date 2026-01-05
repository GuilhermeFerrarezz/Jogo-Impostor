import { Image, Pressable } from 'react-native';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { salvarJogador, getJogadores, removeJogador, removeTodos } from '../services/dados.jsx';
import AntDesign from '@expo/vector-icons/AntDesign';



import Entypo from '@expo/vector-icons/Entypo';
import { useState, useEffect } from 'react';


export default function Jogadores() {
    const [message, setMessage] = useState('Mínimo 3 jogadores')
    const [texto, setTexto] = useState('')
    const [jogadores, setJogadores] = useState([])

    useEffect(() => {
        carregar()
    }, [])


    const carregar = async () => {
        const lista = await getJogadores()
        setJogadores(lista)
        if (lista.length >= 3) {
            setMessage('')
        }
    };


    const adicionarJogador = async () => {
        if (texto) {
            await salvarJogador(texto)
            carregar();
        }

        setTexto("")
    };

    const removerJogador = async (nome) => {
        await removeJogador(nome)
        carregar()
    };
    const removerTodos = async () => {
        await removeTodos()
        carregar()

    }








    return (
        <View style={styles.JogadoresContainer}>
            <ScrollView style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 10 }}
                keyboardShouldPersistTaps="always"
                nestedScrollEnabled={true}

            >
                <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Jogadores</Text>
                <View style={styles.JogadoresPerfil}>
                    <TextInput style={styles.input} value={texto} placeholder=" Digite o nome do jogador" placeholderTextColor={'#838383ff'} onChangeText={(textoNovo) => setTexto(textoNovo)} ></TextInput>
                    <Pressable onPress={adicionarJogador}><Entypo name="plus" size={28} color="black" /></Pressable>
                    <Pressable onPress={removerTodos}><AntDesign name="delete" size={22} color="red" /></Pressable>
                    <Text style={{ color: 'red' }}>{message}</Text>
                </View>
                {jogadores.map((jogador, index) => (
                    <View key={index} style={{ flexDirection: "row", alignItems: "center", }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
                            {jogador}
                        </Text>

                        <Pressable onPress={() => removerJogador(jogador)}><Entypo name="cross" size={28} color="red" /></Pressable>

                    </View>
                ))}
            </ScrollView>


        </View>

    )




}

const styles = {
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 17,
        width: '50%',
        height: 40,
        marginLeft: 0,
        marginTop: 10,

    },


    JogadoresPerfil: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    JogadoresContainer: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 10,
        backgroundColor: '#f7f3f3ff',
        borderRadius: 10,
        width: "85%",
        height: 200,
        justifyContent: 'left',
    }






}