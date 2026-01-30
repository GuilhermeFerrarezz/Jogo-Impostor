import Jogadores from '../components/Jogadores';
import CategoriasContainer from '../components/CategoriasContainer'
import { Alert, Pressable, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import Impostores from '../components/Impostores';
import Tempo from '../components/Tempo'
import Titulo from '../components/Titulo';
import { salvarAnimes, salvarAnime, removeTodosAnimes, removeAnime, getAnimes, getImpostores, getPalavra, removePalavra, removeImpostores, removeTema, removeTodosTemas } from '@/services/dados';
import { useState, useEffect } from 'react';
import { router } from 'expo-router'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Animes() {
    const [animes, setAnimes] = useState([])
    const [texto, setTexto] = useState('')
    useEffect(() => {
        carregar()
    }, [])


    const carregar = async () => {
        const lista = await getAnimes()
        setAnimes(lista)
    };





    const removerAnime = async (codigo) => {
        console.log('removeu')
        await removeAnime(codigo)
        carregar()
    }
    const adicionarAnime = async () => {
        if (texto) {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${texto}`)
                const data = await response.json()
                console.log(data)
                const anime = { codigo: texto, nome: data.data.title }
                await salvarAnime(anime)

            }
            catch {
                Alert.alert('Anime não existe')
            }

            carregar();
        }

        setTexto("")
    };


    const removerTodos = async () => {
        await removeTodosAnimes()
        carregar()
    }
    const resetarTodos = async () => {
        const animeIds = [
            { codigo: 1735, nome: 'Naruto' },
            { codigo: 21, nome: 'One Piece' },
            { codigo: 16498, nome: 'Attack on Titan' },
            { codigo: 38000, nome: 'Kimetsu no Yaiba' },
            { codigo: 52807, nome: 'One Punch Man' },
            { codigo: 49596, nome: 'Blue Lock' },
            { codigo: 40748, nome: 'Jujutsu Kaisen' },
            { codigo: 23755, nome: 'Nanatsu no Taizai' },
            { codigo: 44511, nome: 'Chainsaw Man' },
            { codigo: 22777, nome: 'Dragon Ball' }
        ];
        await salvarAnimes(animeIds)
        carregar()


    }

    return (

        <View style={styles.container}>
            <Titulo></Titulo>
            <Text style={{ paddingTop: 20, textAlign: 'center', color: '#f2ff41ff', fontSize: 35, fontFamily: 'Fredoka_400Regular' }}>Configurar animes</Text>
            <View style={styles.JogadoresContainer}>

                <ScrollView style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    keyboardShouldPersistTaps="always"
                    nestedScrollEnabled={true}

                >
                    <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Animes</Text>
                    <View style={styles.JogadoresPerfil}>
                        <TextInput style={styles.input} value={texto} placeholder=" Digite o código do anime" placeholderTextColor={'#838383ff'} onChangeText={(textoNovo) => setTexto(textoNovo)} ></TextInput>
                        <Pressable style={{ paddingRight: 10 }} onPress={adicionarAnime}><Entypo name="plus" size={28} color="black" /></Pressable>
                        <Pressable style={{ paddingRight: 10 }} onPress={removerTodos}><AntDesign name="delete" size={22} color="red" /></Pressable>
                        <Pressable style={{ paddingRight: 10 }} onPress={resetarTodos}><MaterialCommunityIcons name="lock-reset" size={28} color="black" /></Pressable>
                        <Pressable style={{ paddingRight: 10 }} onPress={() => { router.navigate({ pathname: '/' }) }}><Feather name="arrow-right-circle" size={28} color="black" /></Pressable>




                        {/* <Text style={{ color: 'red' }}>{message}</Text> */}
                    </View>
                    {animes.map((anime, index) => (
                        <View key={index} style={{ flexDirection: "row", alignItems: "center", }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
                                {anime.nome}
                            </Text>

                            <Pressable onPress={() => removerAnime(anime.codigo)}><Entypo name="cross" size={28} color="red" /></Pressable>

                        </View>
                    ))}
                    <Text style={{ paddingTop: 20, textAlign: 'center', color: '#6b6b6bff', fontSize: 20, fontFamily: 'Fredoka_400Regular' }}>Para adicionar mais animes pesquise no google: "nome do anime" + "myanimelist"
                        e clique no primeiro link. Depois analise a url do site e verifique lá o código do anime. Exemplo: Ao pesquisarmos: One piece myanimelist e clicarmos no primeiro site encontramos o seguinte url: "https://myanimelist.net/anime/21/One_Piece?cat=anime", logo o código seria 21. </Text>
                </ScrollView>
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
            height: "70%",
            justifyContent: 'left',
        },
        input: {
            backgroundColor: '#D9D9D9',
            borderRadius: 17,
            width: '50%',
            height: 40,
            marginLeft: 0,
            marginTop: 10,

        },






    })