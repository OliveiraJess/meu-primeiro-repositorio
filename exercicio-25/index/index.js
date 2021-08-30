const tabuleiro = document.querySelector('#Tabuleiro')

const linhas = tabuleiro.querySelectorAll("tr")

linhas.forEach((linha, indexL) => {

    const colunas = linha.querySelectorAll("td")

    colunas.forEach((td, indexC) => {

        atribuirBombasAosCampos(indexL, indexC)

        const campo = td.querySelectorAll('.campo')[0]
        campo.addEventListener('click', () => {
            alert("fui clicado com botão esquerdo")
        })

        campo.addEventListener('contextmenu', () => {
            alert("fui clicado com o botão direito")
            
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
    })
})

function atribuirBombasAosCampos(indexL, indexC){
    // roundown js 0 , 1
    // > ,5 
    //campo recebe bomba
}