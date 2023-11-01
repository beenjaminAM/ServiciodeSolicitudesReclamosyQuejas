import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">

            <ul class="desplegable">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/formularioRQS">Registrar</Link></li>
                <li><Link to="/">Solicitudes</Link></li>
                <li><Link to="/">Reclamos</Link></li>
                <li><Link to="/">Quejas</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav