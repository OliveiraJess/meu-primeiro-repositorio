import BotaoHome from "../components/BotaoHome"
import BotaoVoltar from "../components/BotaoVoltar"
import CartaoVisitaDetalhes from "../components/CartaoVisitaDetalhes"


function CartoesVisitaDetalhe() {
    return (
        <div>
            <BotaoVoltar />
            <BotaoHome />
            <h1>Cartão Visita Detalhe</h1>
            <CartaoVisitaDetalhes id={1} />
        </div>
    )
}
export default CartoesVisitaDetalhe