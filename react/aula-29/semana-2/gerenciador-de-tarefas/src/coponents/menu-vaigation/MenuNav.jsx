
import { Link } from 'react-router-dom'
import { HOME, NOT_FOUND } from '../../routes/rotas'


export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to={HOME}>Home</Link ></li>
            </ul>
        </nav>
    )
}