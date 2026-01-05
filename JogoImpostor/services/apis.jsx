export async function ComidaApi() {
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

export async function HeroesApi() {
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

export async function F1TeamsApi() {
        try {

            let response = await fetch(`https://f1api.dev/api/current/teams`)
            let data = await response.json();
            const nomeTeam = data.teams[Math.floor(Math.random() * 10)].teamName
            return nomeTeam
        } catch {
            return false
        }



    }
     
export async function CountriesAPI() {
        try {
            let response = await fetch(`https://countries-api-abhishek.vercel.app/countries`)
            let data = await response.json();
            const nomePais = data.data[Math.floor(Math.random() * 188)].name
            return nomePais
        } catch {
            return false
        }


    }

export async function ClashRoyaleApi() {
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
export async function AnimeApi() {
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