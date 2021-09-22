
import { Link } from 'react-router-dom'
import { HOME, LOGIN } from '../../routes/rotas'


export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to={HOME}>Home</Link ></li>
                <li><Link to={LOGIN}>Login</Link ></li>
            </ul>
        </nav>
    )
}