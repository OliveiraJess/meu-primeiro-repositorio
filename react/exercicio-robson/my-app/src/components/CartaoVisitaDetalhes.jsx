import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'



function CartaoVisitaDetalhes({ id }) {
    const [cartao, setCartao] = useState({})
    const [isOpen, setIsOpen] = useState(false)
   

    useEffect(() => {
        async function fecthCartao() {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`)
            setCartao(data)
        } fecthCartao()
    }, [])

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)



    return (
        <div >
            <span>{cartao.id}</span>
            <h2>{cartao.name}</h2>
            <p>{cartao.phone}</p>
            <p>{cartao.email}</p>

            <button type="button" onClick={openModal}>Modal</button>

            <Modal isOpen={isOpen} contentLabel="Example Modal">
                <button onClick={closeModal}>X</button>
                <img src="https://thispersondoesnotexist.com/image" style={{widht:'80px'}} alt="Pessoas Aleatorias"/>
            </Modal>
        </div>


    );
}

export default CartaoVisitaDetalhes;
