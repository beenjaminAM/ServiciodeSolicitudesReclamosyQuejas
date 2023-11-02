import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">

            <ul class="desplegable">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/formularioRQS">Registrar</Link></li>
                <li><Link to="/Reclamos">Solicitudes</Link></li>
                <li><Link to="/Reclamos">Reclamos</Link></li>
                <li><Link to="/Reclamos">Quejas</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav