const tabuleiro = document.querySelector("#Tabuleiro")
const linhas = tabuleiro.querySelectorAll("tr")

let bombasTabuleiro = {}

linhas.forEach((linha, indiceLinha) => {
    const colunas = linha.querySelectorAll("td")

    bombasTabuleiro[indiceLinha] = {}

    colunas.forEach((td, indiceColuna) => {
        bombasTabuleiro[indiceLinha][indiceColuna] = false
        const campo = td.querySelectorAll(".campo")[0]

        campo.addEventListener('click', () => {
            alert("Cliquei botão esquerdo")
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

function obterNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function checarBombaAoRedor(bombasTabuleiro, x, y) {
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
    console.log("checagens")
}

function atribuirBombasAosCampos(bombasTabuleiro) {
    for (let i = 0; i < 20; i++) {
        linha = obterNumeroInteiroAleatorio(0, 15)
        coluna = obterNumeroInteiroAleatorio(0, 15)
        bombasTabuleiro[linha][coluna] = true
    }
    for (const [x, y] of Object.entries(bombasTabuleiro)) {
        checarBombaAoRedor(bombasTabuleiro, x, y)
    }
    return bombasTabuleiro
}

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
//alinhar classes
