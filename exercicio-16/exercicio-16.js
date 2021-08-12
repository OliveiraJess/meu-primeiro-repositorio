const prompt = require('prompt-sync')();

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min) //conferir
}



function rolarDado() {

    var iniciarTurno = 1 //prompt("Rolar dado? 1 - Sim, 2 - Não")
    if (iniciarTurno == 1) {
        var resultadoDado = numeroAleatorio(1, 6)
        return resultadoDado
    }
}

    opcao = 0

    while (opcao < 2) {
        var opcao = 1 //prompt(" Digite uma opção: ( 1 - Jogar, 2 - Sair do jogo)");
        if (opcao == 1) {
            var numerosCasas = 20 //prompt("Quantas casas o tabuleiro deve ter? ");
            if (numerosCasas > 10) {
                var quantasCasasAcoes = Math.round(0.4 * numerosCasas)
                var passoTabuleiro = Math.floor(numerosCasas / quantasCasasAcoes)
                var casaAcaoAssociada = 0
                var tabuleiro = {}
                var acoes = ["avancar_2", "recuar_2", "permanecer_2_rodadas", "rolar_dado"]
                for (i = 1; i < numerosCasas; i++) {
                    if (i % passoTabuleiro == 0 && casaAcaoAssociada < quantasCasasAcoes) {
                        tabuleiro[i] = acoes[numeroAleatorio(0, 3)]
                        casaAcaoAssociada++
                    }
                    else {
                        tabuleiro[i] = false
                    }
                }
                // console.log(tabuleiro)

                var posicao = 1 //jogador
                var rodadas = 0
                var penalidade = false
                while (posicao <= numerosCasas) {
                   var valorDado = rolarDado() 
                    if (valorDado > 0) {
                        if ((rodadas - rodadaPenalizada) > 2 || !penalidade) {
                            posicao = posicao + valorDado
                        }
                        var acao = tabuleiro[posicao]
                        switch (acao) {
                            case "avancar_2":
                                posicao = posicao + 2
                                break
                            case "recuar_2":
                                posicao = posicao - 2
                                break
                            case "permanecer_2_rodadas":
                                var rodadaPenalizada = rodadas
                                var penalidade = true
                                break
                            // case "rolar_dados":
                            //     posicao = 
                            //     break ---- criar numero aleatório e somar na posicao?

                        }
                        rodadas++
                        var rodadaAnterior
                    }
                    else {
                        break
                    }
                }

            }
            else { console.log("Opção inválida. O Número de casas deve ser maior que 10.") }
        }
    }
