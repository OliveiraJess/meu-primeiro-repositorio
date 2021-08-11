const prompt = require('prompt-sync')();

// Escolhendo casas do tabuleiro e casas com ações
opcao = 0

while (opcao < 2) {
    var opcao = prompt(" Digite uma opção: ( 1 - Jogar, 2 - Sair do jogo)");
    if (opcao == 1) {
        var numerosCasas = prompt("Quantas casas o tabuleiro deve ter? ");
        if (numerosCasas > 10) { 
            var quantasCasasAcoes = Math.round(0.4*numerosCasas)
            var passoTabuleiro = Math.floor(numerosCasas/quantasCasasAcoes)
            var casaAcaoAssociada = 0
            var tabuleiro = {}
            var acoes = ["avancar_2", "recuar_2", "permanecer_2_rodadas", "rolar_dado"]
            var indiceAcao = 0
            for (i=1; i < numerosCasas; i++){
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
            var posicao = 1
            var rodadas = 0
            while (posicao <= numerosCasas) {
                var rolarDado = prompt ("Rolar dado? 1 - Sim, 2 - Não")
                if (rolarDado == 1) {
                    var resultadoDado = Math.random() * (6 - 1) + 1
                    posicao = posicao + resultadoDado
                    var acao = tabuleiro[posicao]
                    switch (acao) {
                        case "avancar_2":
                            posicao = posicao + 2
                            break
                        case "recuar_2":
                            posicao = posicao - 2
                            break
                        case "permanecer_2_rodadas":
                            posicao = 
                    }
                    rodadas++
                }


                else {
                    break
                }
            }

            
        }
        else {console.log("Opção inválida. O Número de casas deve ser maior que 10.")}
    }
}
