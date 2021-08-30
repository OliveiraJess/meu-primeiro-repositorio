const tabuleiro = document.querySelector("#Tabuleiro")
const tabuleiroOriginal = tabuleiro.innerHTML
const botaoLimpar = document.querySelector(".limpar")

const numeroDeBombas = 20

let bombasTabuleiro = {}


// Checar Bombas ao Redor

function checarBombaAoRedor(bombasTabuleiro, x, y) {
    x = parseInt(x)
    y = parseInt(y)
    checagens = {}
    posicoesValidas = []

    checagens[1] = [x - 1, y - 1]
    checagens[2] = [x - 1, y + 1]
    checagens[3] = [x + 1, y + 1]
    checagens[4] = [x + 1, y - 1]
    checagens[5] = [x, y - 1]
    checagens[6] = [x, y + 1]
    checagens[7] = [x + 1, y]
    checagens[8] = [x - 1, y]

    for (const [numeroChecagem, listaXY] of Object.entries(checagens)) {
        isNegative = false
        listaXY.forEach((posicao) => {
            if (posicao < 0) {
                isNegative = true
            }
        });

        if (!(isNegative)) {
            posicoesValidas.push(checagens[numeroChecagem])
        }
    }
    numeroBombasParaPosicao = 0
    posicoesValidas.forEach((posicao) => {
        if (bombasTabuleiro[posicao[0]][posicao[1]]) {
            numeroBombasParaPosicao++
        }
    })
    return;
}


//Funçao Abrir Campos

function abrirCampo(campo, indiceLinha, indiceColuna) {
    checarBombaAoRedor(bombasTabuleiro, indiceLinha, indiceColuna)
}

// Criar Tabela

function criarTabuleiro() {
    const linhas = tabuleiro.querySelectorAll("tr")
    linhas.forEach((linha, indiceLinha) => {
        const colunas = linha.querySelectorAll("td")

        bombasTabuleiro[indiceLinha] = {}

        colunas.forEach((td, indiceColuna) => {
            bombasTabuleiro[indiceLinha][indiceColuna] = false
            const campo = td.querySelectorAll(".campo")[0]

            campo.addEventListener('click', () => {
                abrirCampo(campo, indiceLinha, indiceColuna)

            })
            campo.addEventListener('contextmenu', () => {
                alert("Cliquei botão direito")
                if (!campo.className.includes("aberto")) {
                    if (campo.className.includes("marcado")) {
                        campo.className = "campo"
                        campo.innerText = ""
                    } else {
                        campo.className = "campo marcado"
                        campo.innerText = "M"
                    }
                }
            })
        });
    });
}


// Função Número Aleatório

function obterNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Atribuir Bombas aos Campos

function atribuirBombasAosCampos(bombasTabuleiro) {
    for (let i = 0; i < numeroDeBombas; i++) {
        linha = obterNumeroInteiroAleatorio(0, 15)
        coluna = obterNumeroInteiroAleatorio(0, 15)
        bombasTabuleiro[linha][coluna] = true
    }
    return bombasTabuleiro
}

// Limpar tabuleiro

function limparTabuleiro() {
    tabuleiro.innerHTML = tabuleiroOriginal
    criarTabuleiro()
}
botaoLimpar.addEventListener("click", limparTabuleiro)

criarTabuleiro()
bombasTabuleiro = atribuirBombasAosCampos(bombasTabuleiro)

console.log(bombasTabuleiro)












// function atribuirBombasAosCampos()


//random js - trabalha de 0, 1
// numero gerado maior que 0,5 recebe bomba
// se não, não recebe

//campo, aberto, perigo, marcado, bomba, bomba explodida - vão ter classes especificas
//botão reset,
//thead informaçoes
//cabeçario fora do main
//baixo main section ranking, entre divs container
//bomba de forma aleatoria, ir na classe, vai ter campo e bomba
//aberto, bomba visivel, perdeu
//alinhar classes.
