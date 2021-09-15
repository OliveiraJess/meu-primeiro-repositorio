import "./incluirTarefa.css"
import Botao from "../botao/Botao"
import { useState } from "react";

export default function IncluirTarefa(props) {
    const [input, setInput] = useState('')

    function handleOnClickAdicionar() {
        if (input.length > 0) {
            props.adicionarTarefa(input)
            setInput('')
        }
    }

    function handleOnChageInput(event) {
        setInput(event.target.value)
    }


    return (
        <div className="incluirTarefa">
            <input type="text" onChange={handleOnChageInput} value={input} />
            <Botao onclick={handleOnClickAdicionar}>Adicionar</Botao>
        </div>
    )
}



