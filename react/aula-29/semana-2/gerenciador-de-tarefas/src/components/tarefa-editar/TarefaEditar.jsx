import { useState } from "react"
import "./tarefaEditar.css"

export default function TarefaEditar({ readOnly, title, children, coletarInformacaoDoEditar }) {

    const [textAreaValue, setTextArea] = useState(children)


    function handleOnChangeTextArea(event) {
        setTextArea(event.target.value)
        coletarInformacaoDoEditar(textAreaValue)
    }

    function validarEdicao() {
        if (readOnly !== "true") {
            return (<textarea onChange={handleOnChangeTextArea} value={textAreaValue}></textarea>)
        } else { return (<textarea readOnly onChange={handleOnChangeTextArea} value={textAreaValue}></textarea>) }
    }

    return (
        <div className="tarefaEditar">
            <h1>{title}</h1>
            {validarEdicao()}
        </div>
    )
}