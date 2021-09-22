import { Botao } from "../../coponents/components";
import { useHistory } from "react-router-dom";

export default function PageLogin() {
    const history = useHistory()


    return (

        <form>
            <label>
                Nome do Usuário
                <input id='usuario' placeholder="Usuário" required />
            </label>
            <label>Senha:
                <input type="password" id="password" placeholder="Senha" required />
            </label>
            <Botao onclick={() => {
                const user = document.querySelector('#usuario').value
                sessionStorage.setItem("usuario", user)
                localStorage.setItem("tarefas", { user: [] })
                history.push('/')
            }}>Login
            </Botao>
        </form>
    )
}