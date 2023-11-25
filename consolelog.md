## O console é um objeto utilizado na hora de programar e no ambiente de desenvolvimento, para avistar erros. É bem bloqueante e recomendado retirar após todos os testes.


Um exemplo que gosto muito é o spotify que utiliza as músicas escutadas durante 12 meses pelo usuario e entrega a retrospectiva ao final do ano. Não sei ao certo como fazem, mas utilizam contagem em cada play, dessa forma, se você ouvir uma música 1000 vezes, eles te entregam este dado. Fico imaginando também, se essa contagem vale apenas quando se tem internet ou se é contada quando se ouve nas músicas em download(offline)


## Pesquisa no GPT para saber as possibilidades e os mais utilizados:

console.log(): Exibe mensagens no console.

console.error(): Exibe mensagens de erro no console.

console.warn(): Exibe mensagens de aviso no console.

console.info(): Exibe mensagens informativas no console.

console.table(): Exibe dados tabulares no console.

console.clear(): Limpa o console.

console.group(): Inicia um grupo de mensagens no console.

console.groupEnd(): Encerra um grupo de mensagens no console.

console.count(): Conta quantas vezes uma determinada mensagem foi exibida.

console.time(): Inicia um temporizador para medir o tempo de execução.

console.timeEnd(): Encerra um temporizador e exibe o tempo decorrido.

console.assert(): Exibe uma mensagem de erro se uma expressão for falsa.

console.dir(): Exibe uma representação interativa de um objeto JavaScript.

console.trace(): Exibe uma rastreamento (trace) da pilha de chamadas.

console.profile(): Inicia a gravação de um perfil de desempenho.

console.profileEnd(): Encerra a gravação de um perfil de desempenho.

console.countReset(): Reinicia a contagem realizada pelo console.count().

console.timeLog(): Registra uma mensagem no console com base em um temporizador existente.

console.debug(): Exibe mensagens de depuração no console (nem sempre suportado em todos os ambientes).

console.memory: Fornece informações sobre o uso de memória.


## função spotify

class SpotifyUser {
    constructor(username) {
        this.username = username;
        this.playHistory = [];
    }

    playSong(songName) {
        // Simulação: Registra a reprodução de uma música
        this.playHistory.push(songName);
    }

    getPlayCount(songName) {
        // Retorna a contagem de reproduções de uma música específica
        const count = this.playHistory.filter(song => song === songName).length;
        return count;
    }

    getTopSongs(numSongs) {
        // Retorna as principais músicas com base nas contagens de reprodução
        const songCounts = {};
        this.playHistory.forEach(song => {
            songCounts[song] = (songCounts[song] || 0) + 1;
        });

        const topSongs = Object.keys(songCounts)
            .sort((a, b) => songCounts[b] - songCounts[a])
            .slice(0, numSongs);

        return topSongs;
    }
}

// Exemplo de uso:
const userSpotify = new SpotifyUser("nome_do_usuario");

// Simulação: O usuário ouve várias músicas
userSpotify.playSong("Nome da Música 1");
userSpotify.playSong("Nome da Música 2");
userSpotify.playSong("Nome da Música 1");
userSpotify.playSong("Nome da Música 3");

// Obtém a contagem de reproduções de uma música específica
const countMusic1 = userSpotify.getPlayCount("Nome da Música 1");
console.log(`Contagem de reproduções de 'Nome da Música 1': ${countMusic1}`);

// Obtém as principais músicas ouvidas pelo usuário
const topSongs = userSpotify.getTopSongs(2);
console.log(`Principais músicas ouvidas: ${topSongs}`);
