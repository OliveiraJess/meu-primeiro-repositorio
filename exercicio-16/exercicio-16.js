const prompt = require('prompt-sync')();

function embaralharLista(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function esperarUmSegundo(funcaoAserExecutada) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(funcaoAserExecutada(1, 6))
        }, 1000)
    })
}

async function rolarDado() {
    var valorDado = await esperarUmSegundo(numeroAleatorio)
    console.log("O dado foi lançado e caiu " + valorDado)
    return valorDado
}

function montarTabuleiro() {
    numerosCasas = 0
    while (numerosCasas < 10) {
        var numerosCasas = prompt("Quantas casas o tabuleiro deve ter? ");
        if (numerosCasas < 10) {
            console.log("Opção inválida. O Número de casas deve ser maior que 10.")
            continue
        }
    }
    var quantasCasasAcoes = Math.round(0.4 * numerosCasas) // 40% das casas tem ações
    var passoTabuleiro = Math.floor(numerosCasas / quantasCasasAcoes)
    var casaAcaoAssociada = 0
    var tabuleiro = {}
    var acoes = embaralharLista(["avancar_2", "recuar_2", "permanecer_2_rodadas", "rolar_dado"])
    var indiceAcao = 0
    for (i = 1; i <= numerosCasas; i++) {
        if (i % passoTabuleiro == 0 && casaAcaoAssociada < quantasCasasAcoes) {
            tabuleiro[i] = acoes[indiceAcao]
            casaAcaoAssociada++
            indiceAcao++
            if (indiceAcao > 3) {
                indiceAcao = 0
            }
        }
        else {
            tabuleiro[i] = false
        }
    }

    return [tabuleiro, numerosCasas]
}

function atualizaPosicao(posicaoAtual, valorDado, numerosCasas) {
    novaPosicao = parseInt(posicaoAtual + valorDado)
    if (novaPosicao > numerosCasas) {
        console.log("O usuário move-se da casa " + posicaoAtual + " para a " + numerosCasas + ".")
        return numerosCasas
    }
    console.log("O usuário move-se da casa " + posicaoAtual + " para a " + novaPosicao + ".")
    return novaPosicao
}


async function jogarJogo() {
    var opcao = 0
    var posicaoJogador = 0
    var numerosCasas = 0
    var infoJogo = montarTabuleiro()
    var tabuleiro = infoJogo[0]
    numerosCasas = infoJogo[1]
    var rodadas = 1
    var rodadaPenalizada = 0
    var penalidade = false
    while (opcao < 2 && posicaoJogador < numerosCasas) { // loop principal do jogo
        var opcao = prompt(" Digite uma opção: ( 1 - Rolar o dado, 2 - Sair do jogo)");
        if (opcao == 2) {
            break // sai do jogo caso o usuario digite 2
        }
        var valorDado = await rolarDado()

        if ((rodadas - rodadaPenalizada) > 2 || !penalidade) {
            var penalidade = false
            posicaoJogador = atualizaPosicao(posicaoJogador, valorDado, numerosCasas)
        }
        var acao = tabuleiro[posicaoJogador]
        switch (acao) {
            case "avancar_2":
                posicaoJogador = atualizaPosicao(posicaoJogador, 2, numerosCasas)
                break;
            case "recuar_2":
                posicaoJogador = atualizaPosicao(posicaoJogador, -2, numerosCasas)
                break;
            case "permanecer_2_rodadas":
                if (!penalidade) {
                    var rodadaPenalizada = rodadas
                    var penalidade = true
                }
                break;
            case "rolar_dado":
                var valorDado = await rolarDado()
                posicaoJogador = atualizaPosicao(posicaoJogador, valorDado, numerosCasas)
                break;
        }
        rodadas++
    }
    console.log("O usuário chegou ao fim!")

}

// Hora de jogar o JOGO!!!!
jogarJogo()