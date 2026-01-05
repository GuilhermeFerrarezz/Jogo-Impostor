import { useEffect, useState } from 'react';
import { View, Pressable } from "react-native";
import { StyleSheet, Text } from "react-native";

const Card = ({ nomeJogador, escrita }) => {
    const [virado, setVirado] = useState(false)

    useEffect(() => {

    }, [virado])

    const revelar = () => {
        setVirado(true)

    }
    const desrevelar = () => {
        setVirado(false)
    }

    return (
        <View>

            {!virado ?
                (<Pressable style={styles.card} onPressIn={revelar} onPressOut={desrevelar} >

                    <Text style={styles.nome}>Jogador:</Text>
                    <Text style={styles.nome}>{nomeJogador}</Text>
                    <Text style={{ marginTop: 150, fontWeight: 'bold' }}>Não diga a palavra para os outros jogadores</Text>
                </Pressable>)
                : (
                    <Pressable onPressOut={desrevelar} style={[styles.card, { backgroundColor: '#f19722ff' }]}>
                        <Text style={styles.nome}>{escrita}</Text>
                        <Text style={{ marginTop: 150, fontWeight: 'bold' }}>Não diga a palavra para os outros jogadores</Text>
                    </Pressable>)}

        </View>


    );
};
const styles = StyleSheet.create({
    card: {
        flex: 0.7,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#ffffffff',
        borderRadius: 10,
        width: '85%',
        height: '30%',
        alignItems: 'center',
        flexDirection: 'column',

    },
    nome: {
        flex: 1,
        fontSize: 44,
        fontFamily: 'Fredoka_400Regular',
        color: 'black',
        textAlign: 'center',

    }

})

export default Card;