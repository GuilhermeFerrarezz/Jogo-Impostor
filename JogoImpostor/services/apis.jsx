import { getAnimes } from "./dados"

export async function ComidaApi() {
    const comidas = [
        "Pizza", "Lasanha", "Ravioli", "Espaguete", "Risoto", "Gnocchi/Nhoque", "Panettone",
        "Hambúrguer", "Cheeseburger", "Hot dog", "Batata frita", "Onion rings",
        "Nuggets", "Milk-shake",
        "Sushi", "Sashimi", "Temaki", "Yakissoba", "Ramen",
        "Taco", "Burrito", "Nachos",
        "Feijoada", "Coxinha", "Pastel", "Pão de queijo", "Brigadeiro",
        "Acarajé", "Moqueca", "Farofa",
        "Empada", "Quindim", "Beijinho",
        "Croissant", "Baguete",
        , "Macaron",
        "Bolo de chocolate", "Brownie", "Cupcake",
        "Sorvete", "Pudim", "Mousse", "Gelato",
        "Churrasco", "Costela", "Picanha", "Bife à parmegiana",
        "Strogonoff", "Frango assado", "Peixe grelhado"

    ]
    try {

        const nomeComida = comidas[Math.floor(Math.random() * comidas.length)]
        console.log(nomeComida)
        //Alert.alert('Recomenda-se pesquisar a comida que cair')
        return nomeComida
    } catch {
        return false
    }
}


export async function HeroesApi() {
    const herois = ["Homem Aranha", "Superman", "Batman", "Mulher Maravilha", "Flash", "Homem de Ferro", "Capitao America", "Thor", "Hulk", "Viuva Negra", "Pantera Negra", "Doutor Estranho", "Homem Formiga", "Feiticeira Escarlate", "Visao", "Gaviao Arqueiro", "Soldado Invernal", "Capita Marvel", "Shazam", "Aquaman", "Lanterna Verde", "Cyborg", "Robin", "Asa Noturna", "Batgirl", "Supergirl", "Arqueiro Verde", "Raio Negro", "Venom", "Deadpool", "Wolverine", "Tempestade", "Professor Xavier", "Magneto", "Ciclope", "Justiceiro", "Homelander", "Invencivel", "Mulher Invisivel", "Batwoman", "A - train", "Starlight", "Soldier Boy"];
    console.log(herois)


    try {

        const nomeHero = herois[Math.floor(Math.random() * herois.length)]
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
        let response = await fetch(`https://restcountries.com/v3.1/all?fields=name,translations,cca2`)
        let data = await response.json();
        console.log(data)
        const nomePais = data[Math.floor(Math.random() * 250)].translations.por.common
        console.log(nomePais)
        return nomePais
    } catch {
        return false
    }


}

export async function ClashRoyaleApi() {
    const cartas = ["Flechas", "Bombardeiro", "Arqueiras", "Cavaleiro", "Bola de Fogo", "Mini P.E.K.K.A", "Mosqueteira", "Gigante", "Príncipe", "Dragão Bebê", "Exército de Esqueletos", "Bruxa", "Goblins Lanceiros", "Goblins", "Cabana de Goblins", "Valquíria", "Relâmpago", "Barril de Goblins", "Esqueletos", "Servos", "Lápide", "Torre de Bombas", "Esqueleto Gigante", "Balão", "Canhão", "Bárbaros", "Foguete", "Cabana de Bárbaros", "Fúria", "X-Besta", "Tesla", "Horda de Servos", "Torre Inferno", "Corredor", "Gelo", "P.E.K.K.A", "Zap (Choque)", "Mago", "Espelho", "Morteiro", "Coletor de Elixir", "Golem", "Gigante Real", "Três Mosqueteiras", "Príncipe das Trevas", "Veneno", "Mago de Gelo", "Princesa", "Espírito de Fogo", "Fornalha", "Guardas", "Lava Hound", "Mineiro", "Sparky", "Lançador", "Espírito de Gelo", "Lenhador", "O Tronco", "Megasservo", "Dragão Infernal", "Golem de Gelo", "Cemitério", "Tornado", "Bárbaros de Elite", "Clone", "Mago Elétrico", "Goblin com Dardo", "Executor", "Aríete de Batalha", "Gangue de Goblins", "Bandida", "Bruxa Sombria", "Morcegos", "Carrinho de Canhão", "Máquina Voadora", "Barril de Esqueletos", "Megacavaleiro", "Eletrocutadores", "Caçador", "Fantasma Real", "Arqueiro Mágico", "Barril de Bárbaro", "Patifes", "Porcos Reais", "Bola de Neve", "Recrutas Reais", "Goblin Gigante", "Dragão Elétrico", "Domadora de Carneiro", "Destruidores de Muros", "Terremoto", "Jaula de Goblin", "Pescador", "Golem de Elixir", "Curadora Guerreira", "Pirotécnica", "Encomenda Real", "Espírito Curador", "Dragões Esqueleto", "Gigante Elétrico", "Espírito Elétrico", "Bruxa Mãe", "Escavadeira de Goblins", "Cavaleiro Dourado", "Rainha Arqueira", "Rei Esqueleto", "Mineiro Bombado", "Monge", "Fênix", "Pequeno Príncipe", "Vácuo", "Goblin Demolidor", "Máquina Goblin", "Maldição Goblin", "Arbusto Traiçoeiro", "Goblinstein", "Gigante das Runas", "Berserker", "Imperatriz Espiritual", "Vinhas", "Princesa da Torre", "Canhoneiro", "Duquesa das Adagas", "Cozinheiro Real"]
    try {
        const nomeCarta = cartas[Math.floor(Math.random() * cartas.length)]
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
        // 38000 = Kimetsu
        // 52807 = One Punch Man
        // 49596 = Blue Lock
        // 40748 = Jujutsu Kaisen
        // 23755 = Nanatsu no Taizai
        // 44511 = Chainsaw Man
        // 22777 = dragon ball

        let animeIds = await getAnimes()
        console.log('Anime ids ', animeIds)
        if (animeIds.length < 1) {
            animeIds = [
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
            await saveAnimes(animeIds)
        }
        let nomeAnime = 'teste'

        const randomAnimeIndex = Math.floor(Math.random() * animeIds.length)
        const animeObj = animeIds[randomAnimeIndex]
        let names = []

        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeObj.codigo}/characters`)
        const data = await response.json()
        console.log(data)
        names.push(...data.data.filter(personagem => personagem.role = 'Mains' && personagem.favorites > 200).map(personagem => personagem.character.name))

        const indice = Math.floor(Math.random() * names.length)

        const nomePersonagem = names.map(personagem => personagem)[indice]
        console.log(nomePersonagem)
        console.log(nomeAnime)
        const personagemAnime = [`${animeObj.nome}: `, nomePersonagem]

        return personagemAnime
    } catch {
        return false
    }


}