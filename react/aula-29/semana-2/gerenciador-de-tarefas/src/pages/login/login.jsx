import { Botao } from "../../coponents/components";

export default function PageLogin(){


    return (

        <form>
            <label>
                Nome do Usuário
                <input id='Usuario'/>
            </label>
            <Botao onclick={()=>{
                const user = document.querySelector('#Usuario').value
                sessionStorage.setItem("usuario", user) 
                window.location.reload()
            }}>Salvar</Botao>
        </form>
    )
}