import AsyncStorage from '@react-native-async-storage/async-storage';
export async function salvarJogador(itemLista) {
    const lista = await getJogadores();

    lista.push(String(itemLista));

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("jogadores", jsonLista);
}




export async function getJogadores() {
    const dados = await AsyncStorage.getItem('jogadores');
    const lista = dados ? JSON.parse(dados) : [];
    return lista;
}


export async function removeJogador(nome) {
    const lista = await getJogadores();
    const novaLista = lista.filter(x => x !== nome);
    const jsonLista = JSON.stringify(novaLista);
    await AsyncStorage.setItem("jogadores", jsonLista);
}

export async function removeTodos() {
    const lista = await getJogadores();
    const novaLista = []
    const jsonLista = JSON.stringify(novaLista);
    await AsyncStorage.setItem("jogadores", jsonLista);
}



export async function adicionarTempo(minutos) {
    await AsyncStorage.setItem("minutos", JSON.stringify(minutos))
}

export async function getTempo() {
    const minutos = await AsyncStorage.getItem('minutos');
    return Number(minutos);
}

export async function adicionarNumeroImpostores(numero) {
    await AsyncStorage.setItem("NumeroImpostores", JSON.stringify(numero))
}

export async function getNumeroImpostores() {
    const numeroImpostores = await AsyncStorage.getItem('NumeroImpostores');
    return Number(numeroImpostores);
}

export async function salvarTemas(tema) {
    const lista = await getTemas();

    lista.push(tema);

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("temas", jsonLista);
}
export async function getTemas() {
    const dados = await AsyncStorage.getItem('temas');
    const lista = dados ? JSON.parse(dados) : [];
    return lista;
}

export async function removeTema(tema) {
    const lista = await getTemas();
    const novaLista = lista.filter(x => x !== tema);
    const jsonLista = JSON.stringify(novaLista);
    await AsyncStorage.setItem("temas", jsonLista);
}

export async function removeTodosTemas() {
    await AsyncStorage.setItem("temas", JSON.stringify([]));
}



export async function salvarImpostores(impostores) {

    const jsonImpostores = JSON.stringify(impostores);
    await AsyncStorage.setItem("impostores", jsonImpostores);
}

export async function getImpostores() {
    const dados = await AsyncStorage.getItem('impostores');
    const lista = dados ? JSON.parse(dados) : [];
    return lista;
}

export async function removeImpostores() {
    await AsyncStorage.setItem("impostores", JSON.stringify([]));
}

//Palavra sorteadsa
export async function salvarPalavra(palavra) {

    const jsonPalavra = JSON.stringify(palavra);

    await AsyncStorage.setItem("palavra", jsonPalavra);
}

export async function getPalavra() {
    const palavra = await AsyncStorage.getItem('palavra');
    const jsonPalavra = palavra ? JSON.parse(palavra) : [];
    return jsonPalavra;
}

export async function removePalavra() {
    await AsyncStorage.setItem("palavra", '');
}


export async function salvarAnime(codigo) {
    const lista = await getAnimes();

    lista.push(codigo);

    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("animes", jsonLista);
}

export async function salvarAnimes(lista) {
    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("animes", jsonLista);
}



export async function getAnimes() {
    const dados = await AsyncStorage.getItem('animes');
    const lista = dados ? JSON.parse(dados) : [];
    return lista;
}

export async function removeAnime(codigo) {
    const lista = await getAnimes();
    const novaLista = lista.filter(x => x.codigo !== codigo);
    const jsonLista = JSON.stringify(novaLista);
    await AsyncStorage.setItem("animes", jsonLista);
}

export async function removeTodosAnimes() {
    const lista = await getAnimes();
    const novaLista = []
    const jsonLista = JSON.stringify(novaLista);
    await AsyncStorage.setItem("animes", jsonLista);
}

