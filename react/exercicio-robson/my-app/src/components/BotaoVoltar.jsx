import { useHistory } from "react-router";

function BotaoVoltar() {

    const history = useHistory()
    const voltar = () => history.goBack


    return (
        <div>
            <button type='button' onClick={voltar} >Voltar</button>
        </div>
    )

}

export default BotaoVoltar