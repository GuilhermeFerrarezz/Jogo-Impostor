import { Image, Pressable } from 'react-native';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import Categorias from './Categorias';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import { salvarTemas, getTemas, removeTema } from '../services/dados.jsx';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router'
export default function CategoriasContainer() {
    const [temas, setTemas] = useState([])
    const carregar = async () => {
        const lista = await getTemas()
        setTemas(lista)
        console.log(lista)
    };


    const selecionarTema = async (tema, pressionado) => {
        console.log('Selecionou')

        if (tema && pressionado) {
            await salvarTemas(tema)
            carregar();
        } else if (tema && !pressionado) {
            await removeTema(tema)
            carregar()
        }

    }





    return (
        <View style={styles.CategoriaContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Categoria</Text>
            <ScrollView contentContainerStyle={{ justifyContent: "flex-start" }}
                nestedScrollEnabled={true}




            >

                <View style={styles.CategoriaPerfil}>
                    <Categorias colorBackground={'#ff72deff'} color={'#62015fff'} text={'Pais'} onClick= {selecionarTema}><Pressable></Pressable></Categorias>
                    <Categorias colorBackground={'#72ff81ff'} color={'#01622eff'} text={'Heroes'} onClick= {selecionarTema}><Pressable></Pressable></Categorias>
                    <Categorias colorBackground={'#6fb9ebff'} color={'#1578d4ff'} text={'Clash Royale'} onClick= {selecionarTema}><Pressable></Pressable></Categorias>
                    <Categorias colorBackground={'#F0001D'} color={'#b56770ff'} text={'Comida'} onClick={selecionarTema}><Pressable></Pressable></Categorias>
                    <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Categorias colorBackground={'#b5b7faff'} color={'#a534f5ff'} text={'Anime'} onClick={selecionarTema}></Categorias>
                    
                        <Pressable onPress = {()=>{router.navigate({ pathname: '../animeTela' })}} style={{marginTop: 10, paddingLeft: 5}}><Ionicons name="settings-outline" size={24} color="black" /></Pressable>
                    </View>



                    <Categorias colorBackground={'#ffa269ff'} color={'#bc805aff'} text={'F1'} onClick= {selecionarTema}><Pressable></Pressable></Categorias>
              
            </View>

            </ScrollView>
        </View>

    )



}

const styles = {
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 17,
        width: '50%',
        height: 30,
        marginLeft: 0,
        marginTop: 10,

    },


    CategoriaPerfil: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: "flex-start"
    },

    CategoriaContainer: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 10,
        backgroundColor: '#f7f3f3ff',
        borderRadius: 10,
        width: '85%',
        height: 200,

    }






}