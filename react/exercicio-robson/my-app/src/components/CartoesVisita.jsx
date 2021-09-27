import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function CartoesVisita() {

  const [quantidade, setQuantidade] = useState(0)
  const [cartoes, setCartoes] = useState()

  useEffect(() => {
    async function fecthCartoes() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setCartoes(data)
    } fecthCartoes()
  }, [])

  useEffect(() => {
    setQuantidade(cartoes.length)
  }, [cartoes])

  return (
    <div >

      <header>
        <h1>Cartões de Visita ({quantidade})</h1>
        <p>frase frase frase</p>
      </header>

      <main>
        <ul>
          {cartoes.map((cartao) => (
            <Link key={cartao.id} to={`/cartao-visita/${cartao.id}`}>
              <li >
                <h2>{cartao.name}</h2>
                <p>{cartao.phone}</p>
                <p>{cartao.email}</p>
              </li>
            </Link>
          ))}
        </ul>
        <span>{cartoes.length === 0 && 'Sem cartões de visita.'}</span>
      </main>
    </div>
  );
}

export default CartoesVisita;
