import { useHistory } from "react-router";

function BotaoHome() {

    const history = useHistory()
    const goHome = () => history.push('./home')


    return (
        <div>
            <button type='button' onClick={goHome} >home</button>
        </div>
    )

}

export default BotaoHome