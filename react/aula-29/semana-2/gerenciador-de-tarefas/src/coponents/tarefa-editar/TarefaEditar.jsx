import { useState } from "react"
import "./tarefaEditar.css"

export default function TarefaEditar({ tarefa, onChange, readOnly }) {
    const [valor, setValor] = useState(tarefa.conteudo)


    function handleOnChange(event) {
        setValor(event.target.value)
        onChange(event.target.value)
    }

    return (
        <div className="tarefaEditar">
            <h1>{tarefa.titulo}</h1>
            <textarea readOnly={readOnly} onChange={handleOnChange} value={valor}></textarea>
        </div>
    )
}