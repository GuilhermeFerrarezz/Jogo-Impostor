import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Titulo from '../components/Titulo';
import { useState, useEffect } from 'react';
import { getTempo } from '@/services/dados'
import { router } from 'expo-router'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';


export default function timerTela1() {
    let [tempoMin, setTempoMin] = useState()
    let [tempoSeg, setTempoSeg] = useState()

    useFocusEffect(
    useCallback(() => {
    let intervaloTempo

    const load = async () => {
      const tempoMin = await getTempo()
      setTempoMin(tempoMin)
      setTempoSeg(tempoMin * 60)

      intervaloTempo = setInterval(() => {
        setTempoSeg(prev => {
          if (prev <= 1) {
            clearInterval(intervaloTempo)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    };

    load();
    return () => {
      if (intervaloTempo) {
        clearInterval(intervaloTempo)
      }
    };
  }, [])
    );
    const minutos = Math.floor(tempoSeg / 60);
    const segundos = tempoSeg % 60;
    const tempoFormatado = String(minutos).padStart(2, '0') + ':' + String(segundos).padStart(2, '0');





    return (

        <View style={styles.container}>

            <View style={styles.cabecalhoContainer} >
                <Titulo></Titulo>
            </View>

            <View style={styles.TempoContainer}>
                <View style={styles.Tempo}>
                    <Text style={styles.TempoTexto}>Timer:</Text>
                    <Text style={[styles.TempoTexto, { backgroundColor: '#f12362' }]}>{tempoFormatado}</Text>
                </View>
            </View>

            <View style={styles.BotaoContainer}>
                <Pressable style={styles.Botao} onPress={()=> router.navigate({pathname:'/telaFinal'})  }>
                    <Text style={styles.BotaoTexto}>Revelar Palavra e Impostor</Text>
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
            fontFamily: 'Cherr'
        },

        cabecalhoContainer: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,


        },
        TempoTexto: {
            fontSize: 40,
            fontWeight: 'bold',
        },

        TempoContainer: {
            marginTop: 50,
            flex: 0.33,
        },

        Tempo: {
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#f7f3f3ff',
            borderRadius: 10,
            width: '75%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },

        BotaoContainer: {
            flex: 0.33,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 300,
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