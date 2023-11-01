import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">
                    Search User
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Buscar un usuario"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul class="desplegable">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Formulario</Link></li>
                <li><Link to="/">Solicitudes</Link></li>
                <li><Link to="/">Reclamos</Link></li>
                <li><Link to="/">Quejas</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav