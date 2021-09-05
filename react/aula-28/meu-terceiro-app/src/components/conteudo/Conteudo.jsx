import './conteudo.css'

function Conteudo(props) {


    return (
        <span className="Conteudo">
            {props.children}
        </span>
    )

}

export default Conteudo