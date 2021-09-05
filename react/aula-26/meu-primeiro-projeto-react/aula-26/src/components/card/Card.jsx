import "./card.css";

import Conteudo from "../Conteudo"

function Card({ titulo, nome, idade, altura, largura }) {

    const conteudo = habilitaConteudo(nome, idade)
    // const cabecalho = habilitaTitulo(titulo)


    return (
        <div className="container-card" style={{ 'height': altura, 'width': largura }}>
            <h1>{titulo}</h1>
            <>
    
                {conteudo}
            </>

        </div>
    )
}
export default Card;

function habilitaConteudo(nome, idade) {
    if (nome && idade) {
        return (
            <Conteudo nome={nome} idade={idade}></Conteudo>
        )
    }
}

// function 