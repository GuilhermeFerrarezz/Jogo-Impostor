import { getImpostores, getJogadores, getPalavra } from '@/services/dados';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Titulo from '@/components/Titulo';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';

const cardsJogadores = () => {
    let [palavra, setPalavra] = useState()
    let [escrita, setEscrita] = useState()
    let [jogadores, setJogadores] = useState([])
    let [jogador, setJogador] = useState(null)
    let [index, setIndex] = useState(0)
    let [lengthJogadores, setLengthJogadores] = useState(0)
    let [impostor, setImpostor] = useState();

    useFocusEffect(
        useCallback(() => {
            const load = async () => {
                const listJogadores = await getJogadores();
                const palavraInicial = await getPalavra();
                const impostores = await getImpostores();

                setImpostor(impostores);
                setJogadores(listJogadores);
                setLengthJogadores(listJogadores.length);
                setIndex(0);
                setJogador(listJogadores[0]);
                setPalavra(palavraInicial);

                const isImpostor = impostores.includes(listJogadores[0]);
                setEscrita(isImpostor ? 'Você é o IMPOSTOR' : palavraInicial);
            };

            load();
        }, [])
    );




    const proxJogador = () => {
        let indexCont = index + 1
        setIndex(indexCont)
        console.log('index ' + indexCont)
        console.log('JogSelecionado ' + jogadores[indexCont])

        if (impostor.length <= 1) {
            console.log('Entrou')
            if (impostor == jogadores[indexCont]) {
                setJogador(jogadores[indexCont])
                setEscrita('Você é o IMPOSTOR')
            } else {
                setJogador(jogadores[indexCont])
                setEscrita(palavra)
            }
        } else {
            let isImpostor = false
            let indexCont = index + 1
            for (let index = 0; index < impostor.length; index++) {

                const element = impostor[index];
                if (element == jogadores[indexCont]) {
                    isImpostor = true
                }
                if (isImpostor) {
                    setJogador(jogadores[indexCont])
                    setEscrita('Você é o IMPOSTOR')
                } else {
                    setJogador(jogadores[indexCont])
                    setEscrita(palavra)
                }
            }



        }
    }











    //console.log(jogador)
    return (
        <View style={styles.container}>
            <Titulo></Titulo>
            {palavra && (<Card escrita={escrita} nomeJogador={jogador}></Card>)}
            {index < lengthJogadores - 1 ?
                (
                    <Pressable style={styles.Botao} onPress={proxJogador}>
                        <Text style={styles.BotaoTexto}>Próximo jogador </Text>
                    </Pressable>
                ) :
                (
                    <Pressable style={styles.Botao} onPress={() => router.navigate({ pathname: '/telaTimer' }, () => { setIndex() })}>
                        <Text style={styles.BotaoTexto}>Iniciar rodada </Text>
                    </Pressable>



                )
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f2bc0',
        alignItems: 'center',


    },
    Botao: {
        backgroundColor: '#F3E446',
        borderRadius: 20,
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    BotaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})

export default cardsJogadores;
