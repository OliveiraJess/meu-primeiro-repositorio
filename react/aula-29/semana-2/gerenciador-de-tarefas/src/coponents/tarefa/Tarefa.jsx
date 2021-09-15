import "./tarefa.css"
export default function Tarefa({ tarefa, deletar, visualizar, editar }) {

    return (
        <div className="tarefa">
            <h1>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="vizualizar" onClick={() => visualizar(tarefa.id)}>V</button>
                <button className="ediatr" onClick={() => editar(tarefa.id)}>E</button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}>X</button>
            </div>
        </div>
    )
}