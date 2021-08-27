const tabuleiro = document.querySelector("#Tabuleiro")
const linhas = tabuleiro.querySelectorAll("tr")

linhas.forEach((linha, indiceLinha) => {
    const colunas = linha.querySelectorAll("td")

    colunas.forEach((td, indiceColuna) => {
        //atribuirBombasAosCampos(indiceLinha, indiceColuna)
        const campo = td.querySelectorAll(".campo")[0]
    
    campo.addEventListener('click', () => {
        alert("Cliquei botão esquerdo")
    })
    campo.addEventListener('contextmenu', () => {
        alert("Cliquei botão direito")
        if (!campo.className.includes("aberto")){
            if (campo.className.includes("marcado")){
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

function atribuirBombasAosCampos(indiceLinha, indiceColuna)
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
