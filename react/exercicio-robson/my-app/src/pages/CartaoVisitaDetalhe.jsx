import BotaoHome from "../components/BotaoHome"
import BotaoVoltar from "../components/BotaoVoltar"
import CartaoVisitaDetalhes from "../components/CartaoVisitaDetalhes"
import {useParams} from 'react-router'

function CartoesVisitaDetalhe() {

    const {id} = useParams()

    return (
        <div>
            <BotaoVoltar />
            <BotaoHome />
            <h1>Cartão Visita Detalhe</h1>
            <CartaoVisitaDetalhes id={id} />
        </div>
    )
}
export default CartoesVisitaDetalhe