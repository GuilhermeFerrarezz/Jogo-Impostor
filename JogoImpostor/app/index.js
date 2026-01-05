import Jogadores from '../components/Jogadores';
import Titulo from '../components/Titulo'
import CategoriasContainer from '../components/CategoriasContainer'
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Impostores from '../components/Impostores';
import Tempo from '../components/Tempo'
import { router } from 'expo-router'
import { adicionarTempo, removeTodosTemas, salvarTemas, salvarJogador, getJogadores, removeJogador, adicionarNumeroImpostores, getNumeroImpostores, getTempo, getTemas, getImpostores, salvarImpostores, removeImpostores, salvarPalavra, removePalavra, removeTema } from '../services/dados.jsx';
import { ClashRoyaleApi, AnimeApi, ComidaApi, CountriesAPI, F1TeamsApi, HeroesApi } from '../services/apis.jsx';
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';


export default function ImpostorGame() {
    const [jogadores, setJogadores] = useState([])
    const [numeroImpostores, setNumeroImpostores] = useState(1)
    const [tempo, setTempo] = useState(0)
    const [temas, setTemas] = useState([])
    const [alertTexto, setAlertTexto] = useState('')



   useFocusEffect(
  useCallback(() => {
      const load = async () => {
        await removePalavra();
        await removeImpostores();
        await removeTema();
        await removeTodosTemas();  
    };
    load();
  }, [])
);





    const recarregar = async () => {
        //await adicionarTempo(0);
        await removeImpostores();
        await removeJogador();
        await removePalavra();
        //await removeTema();
        //await removeTodosTemas();
        setAlertTexto('')
    };



    function sortearJogador(lista, impostores) {
        let i = lista.length;
        while (i > 0) {
            const j = Math.floor(Math.random() * i);
            i--
            [lista[i], lista[j]] = [lista[j], lista[i]];
        }
        return lista.slice(0, impostores);
    }

    



    async function iniciarJogo() {
        recarregar()
        const jogadores = await getJogadores();
        setJogadores(jogadores);
        const impostores = await getNumeroImpostores();
        setNumeroImpostores(impostores == null ? 1 : impostores);
        const tempo = await getTempo();
        setTempo(tempo);
        const temas = await getTemas();
        setTemas(temas);
        console.log("Jogadores:", jogadores)
        console.log('Temas: ' + temas)

        if (jogadores.length >= 3 && temas.length > 0) {
            let estadoAtual = true
            let tema = ''
            if (temas.length == 1) {
                tema = temas[0]

            }
            const jogadorImpostor = sortearJogador(jogadores, impostores)
            await salvarImpostores(jogadorImpostor)
            console.log('Impostor: ' + await getImpostores())
            //console.log(temas[0])
            if (temas.length > 1) {
                const randomTemaIndex = Math.floor(Math.random() * temas.length)
                tema = temas[randomTemaIndex]
                console.log('Tema escolhido: ' + tema)
            }

            if (tema == 'Clash Royale') {
                console.log('Clashhhhhh')
                const carta = await ClashRoyaleApi()
                //console.log('CARTAA: ', carta)
                if (carta != false) {
                    await salvarPalavra(carta)
                } else {
                    estadoAtual = false
                    setAlertTexto('Clash Royale indisponível. Confira sua rede ou selecione outra categoria.')
                }



            }
            if (tema == 'Anime') {
                console.log('Animeeeeeeeee')
                const personagem = await AnimeApi()
                if (personagem != false) {
                    await salvarPalavra(personagem)
                } else {
                    estadoAtual = false
                    setAlertTexto('Animes indisponível. Confira sua rede ou selecione outra categoria.')
                }



            }
            if (tema == 'Comida') {

                console.log('Comidaaaaaaaaaaa')
                const comida = await ComidaApi()
                if (comida != false) {
                    await salvarPalavra(comida)
                } else {
                    estadoAtual = false
                    setAlertTexto('Comidas indisponível. Confira sua rede ou selecione outra categoria.')
                }
            }

            if (tema == 'F1') {

                console.log('F1')
                const team = await F1TeamsApi()
                if (team != false) {
                    await salvarPalavra(team)
                } else {
                    estadoAtual = false
                    setAlertTexto('F1 indisponível. Confira sua rede ou selecione outra categoria.')
                }
            }
            if (tema == 'Heroes') {

                console.log('Herooooo')
                const hero = await HeroesApi()
                await salvarPalavra(hero
                )
            }
            if (tema == 'Pais') {
                
                console.log('Paiiiiiiiiiis')
                const pais = await CountriesAPI()
                if (pais != false) {
                    await salvarPalavra(pais)
                } else {
                    estadoAtual = false
                    setAlertTexto('Pais indisponível. Confira sua rede ou selecione outra categoria.')
                }
        
            }
            if (estadoAtual != false) {
                router.navigate({ pathname: '/cardsJogadores' })
            } else {
                if (jogadores.length <= 3) {
                    Alert.alert('Mínimo 3 jogadores')
                } else if (temas.length < 0) {
                    Alert.alert('Selecione um ou mais temas')
                    
                }



            }


        }
    }


    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.cabecalhoContainer} >
                <Titulo></Titulo>
            </View>
            <Jogadores></Jogadores>
            <Text style={{ marginLeft: 10, color: 'red', fontSize: 20 }}>{alertTexto}</Text>
            <CategoriasContainer>
            </CategoriasContainer>
            <Impostores></Impostores>
            <Tempo ></Tempo>

            <View style={styles.BotaoContainer}>
                <Pressable onPress={iniciarJogo} style={styles.Botao}>
                    <Text style={styles.BotaoTexto}>Iniciar Jogo</Text>
                </Pressable>
            </View>
        </ScrollView>

    )
}
const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#372DCE',

        },
        titulo: {
            fontSize: 64,
            color: "#F3E446",
            textAlign: 'center',
            fontFamily: 'Cherr'
        },

        cabecalhoContainer: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
        },

        Botao: {
            backgroundColor: '#F3E446',
            borderRadius: 20,
            width: '60%',
            height: 50,
            alignItems: 'center',
        },

        BotaoTexto: {
            fontSize: 30,
            fontWeight: 'bold',
        },

        BotaoContainer: {
            marginTop: 30,
            marginBottom: 20,
            marginRight: 10,
            alignItems: 'center',
            alignContent: 'right',
        }
    })