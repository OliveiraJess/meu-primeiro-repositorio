import { useState } from "react"
import "./tarefa.css"
export default function Tarefa({ tarefa, deletar, visualizar, editar, alterarStatus }) {

    const [classe, setClasse] = useState("tarefa")

    function handleOnClick() {
        if (tarefa.concluida) {
            setClasse("tarefa")
        } else {
            setClasse("tarefa concluida")
        } 
        alterarStatus(tarefa.id)
    }

    return (
        <div className={classe}>
            <h1 onClick={handleOnClick}>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="vizualizar" onClick={() => visualizar(tarefa.id)}>V</button>
                <button className="ediatr" onClick={() => editar(tarefa.id)}>E</button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}>X</button>
            </div>
        </div>
    )
}