import { useState, useEffect } from 'react'
import axios from 'axios'



function CartaoVisitaDetalhes({id}) {


    const [cartao, setCartao] = useState({})

    useEffect(() => {
        async function fecthCartao() {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/users${id}`)
            setCartao(data)
        } fecthCartao()
    }, [])



    return (
        <div >
            <span>{cartao.id}</span>
            <h2>{cartao.name}</h2>
            <p>{cartao.phone}</p>
            <p>{cartao.email}</p>
        </div>
    );
}

export default CartaoVisitaDetalhes;
