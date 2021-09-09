import "./tarefa.css"
export default function Tarefa({tarefa, deletar}) {

    return(
        <div className="tarefa">
            <h1>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="ediatr">E</button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}>X</button>
                <button className="vizualizar">V</button>
            </div>
        </div>
    )
}