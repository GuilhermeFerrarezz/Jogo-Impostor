import Jogadores from '../components/Jogadores';
import Titulo from '../components/Titulo'
import CategoriasContainer from '../components/CategoriasContainer'
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Impostores from '../components/Impostores';
import Tempo from '../components/Tempo'
import { router } from 'expo-router'
import { adicionarTempo, removeTodosTemas, salvarTemas, salvarJogador, getJogadores, removeJogador, adicionarNumeroImpostores, getNumeroImpostores, getTempo, getTemas, getImpostores, salvarImpostores, removeImpostores, salvarPalavra, removePalavra, removeTema } from '../services/dados.jsx';
import { useState, useEffect } from 'react';
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

    async function ComidaApi() {
        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            let data = await response.json();
            const nomeComida = data.meals[0].strMeal
            console.log(nomeComida)
            Alert.alert('Recomenda-se pesquisar a comida que cair')
            return nomeComida
        } catch {
            return false
        }
    }

    async function HeroesApi() {
        try {

            let id = Math.floor(Math.random() * 732)
            let response = await fetch(`https://www.superheroapi.com/api.php/f580a9ba62cb7ebe6a8d331918162924/${id}`)
            let data = await response.json();
            const nomeHero = data.name
            return nomeHero
        } catch {
            return false
        }
    }

    async function F1TeamsApi() {
        try {

            let response = await fetch(`https://f1api.dev/api/current/teams`)
            let data = await response.json();
            const nomeTeam = data.teams[Math.floor(Math.random() * 10)].teamName
            return nomeTeam
        } catch {
            return false
        }



    }
     
    async function ConuntriesAPI() {
        try {
            let response = await fetch(`https://countries-api-abhishek.vercel.app/countries`)
            let data = await response.json();
            const nomePais = data.data[Math.floor(Math.random() * 188)].name
            return nomePais
        } catch {
            return false
        }


    }

    async function ClashRoyaleApi() {
        try {
            const response = await fetch('http://localhost:3000/cartas')

            const data = await response.json();
            const indice = Math.floor(Math.random() * data.items.length)

            const nomeCarta = data.items.map(carta => carta.name)[indice]

            console.log(data);
            console.log(nomeCarta);
            return nomeCarta
        } catch {
            return false

        }

    }
    async function AnimeApi() {
        try {
            
        
            // 1725 = naruto
            // 21 = one piece
            // 16498 = AOT
            // 38000 = Kimetsy
            // 52807 = One Punch Man
            // 49596 = Blue Lock
            // 40748 = Jujutsu Kaisen
            // 23755 = Nanatsu no Taizai
            // 44511 = Chainsaw Man
            // 22777 = dragon ball
            let nomeAnime = 'teste'
            const animeIds = [1735, 21, 16498, 38000, 52807, 49596, 40748, 23755, 44511, 22777]

            const randomAnimeIndex = Math.floor(Math.random() * animeIds.length)
            const animeId = animeIds[randomAnimeIndex]
            switch (animeId) {
                case 1735:
                    nomeAnime = 'Naruto'
                    break;
                case 21:
                    nomeAnime = 'One Piece'
                    break;
                case 16498:
                    nomeAnime = 'Aot'
                    break;
                case 38000:
                    nomeAnime = 'Kimetsu no Yaiba'
                    break;
                case 52807:
                    nomeAnime = 'One Punch Man'
                    break;
                case 49596:
                    nomeAnime = 'Blue Lock'
                    break;
                case 40748:
                    nomeAnime = 'Jujutsu Kaisen'
                    break;
                case 23755:
                    nomeAnime = 'Nanatsu no Taizai'
                    break;
                case 44511:
                    nomeAnime = 'Chainsaw Man'
                    break;
                case 22777:
                    nomeAnime = 'Dragon Ball'
                default:


                    break;
                
            }
            let names = []

            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`)
            const data = await response.json()
            console.log(data)
            names.push(...data.data.filter(personagem => personagem.role = 'Mains' && personagem.favorites > 200).map(personagem => personagem.character.name))

            const indice = Math.floor(Math.random() * names.length)

            const nomePersonagem = names.map(personagem => personagem)[indice]
            console.log(nomePersonagem)
            console.log(nomeAnime)
            const personagemAnime = [`${nomeAnime}: `, nomePersonagem]

            return personagemAnime
        } catch {
            return false
        }


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
                const pais = await ConuntriesAPI()
                if (pais != false) {
                    await salvarPalavra(pais)
                } else {
                    estadoAtual = false
                    setAlertTexto('Pais indisponível. Confira sua rede ou selecione outra categoria.')
                }
        
            }
            if (estadoAtual != false) {
                router.navigate({ pathname: '/cardsJogadores' })
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