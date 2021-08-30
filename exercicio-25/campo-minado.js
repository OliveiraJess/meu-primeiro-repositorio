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

function atribuirBombasAosCampos(bombasTabuleiro) {
    for (let i = 0; i < 20; i++) {
        linha = obterNumeroInteiroAleatorio(0, 15)
        coluna = obterNumeroInteiroAleatorio(0, 15)
        bombasTabuleiro[linha][coluna] = true
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
