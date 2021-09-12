
import { Link } from 'react-router-dom'


export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link ></li>
                <li><Link to="/visualizar">Visualizar</Link ></li>
                <li><Link to="/editar">Editar</Link ></li>
            </ul>
        </nav>
    )
}