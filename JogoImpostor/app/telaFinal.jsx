import Jogadores from '../components/Jogadores';
import CategoriasContainer from '../components/CategoriasContainer'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Impostores from '../components/Impostores';
import Tempo from '../components/Tempo'
import Titulo from '../components/Titulo';
import { getImpostores, getPalavra, removePalavra, removeImpostores, removeTema, removeTodosTemas} from '@/services/dados';
import { useState, useEffect } from 'react';
import { router } from 'expo-router'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';

export default function Banco() {
    let [impostores, setImpostores] = useState([])
    let [palavra, setPalavra] = useState('')

    async function finalizarJogo () {
        await removePalavra();
        await removeImpostores();
        await removeTema();
        await removeTodosTemas();
        await router.navigate({ pathname: '/' })
    
    }  

   useFocusEffect(
  useCallback(() => {
    const load = async () => {
      const palavra = await getPalavra();
      setPalavra(palavra);

      const impostores = await getImpostores();
      setImpostores(impostores);

      console.log(impostores);
    };

    load();
  }, [])
);




    return (

        <View style={styles.container}>


            <Titulo></Titulo>

            <View style={styles.RevelarBotaoContainer}>
                <View style={styles.RevelarBotao}>

                    <Text style={styles.RevelarTexto}>Palavra e</Text>
                    <Text style={styles.RevelarTexto}>Impostores</Text>
                </View>
            </View>

            <View style={styles.RespostasContainer}>
                <View style={styles.Respostas}>
                    <Text style={styles.RespostasTexto1}>Palavra:</Text>
                    <Text style={styles.RespostasTexto2}>{palavra}</Text>
                    <Text style={styles.RespostasTexto1}>Impostores:</Text>
                    <Text style={styles.RespostasTexto2}>{impostores + ''}</Text>
                </View>
            </View>

            <View style={styles.BotaoContainer}>
                <Pressable style={styles.Botao} onPress={finalizarJogo}>
                    <Text style={styles.BotaoTexto} >Finalizar Jogo</Text>
                </Pressable>
            </View>


        </View>

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
        },

        cabecalhoContainer: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,


        },
        RevelarTexto: {
            fontSize: 48,
            fontWeight: 'bold',
            justifyContent: 'center',
            flexDirection: 'column',
        },

        RevelarBotaoContainer: {
            marginTop: 50,
            flex: 0.33,
        },

        RevelarBotao: {
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#60d848ff',
            borderRadius: 10,
            width: '75%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },

        RespostasContainer: {
            marginTop: 80,
            flex: 0.33,
        },

        Respostas: {
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffffffff',
            borderRadius: 10,
            width: '75%',
            height: 145,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },


        RespostasTexto1: {
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 20,
        },

        RespostasTexto2: {
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
            color: '#f19722ff',
        },


        BotaoContainer: {
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
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
            fontSize: 15,
            fontWeight: 'bold',
            justifyContent: 'center',
            flexDirection: 'column',
        }

    })