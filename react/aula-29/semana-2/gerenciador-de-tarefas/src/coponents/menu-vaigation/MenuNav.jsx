
import { Link } from 'react-router-dom'
import { HOME, NOT_FOUND } from '../../routes/rotas'


export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to={HOME}>Home</Link ></li>
                <li><button onClick={()=>{
                    sessionStorage.removeItem("usuario")
                    window.location.reload()
                }}>Logout</button></li>
            </ul>
        </nav>
    )
}