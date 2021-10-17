import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
        <nav className = "navBar">
            <Link className="button navBar__home" to="/">
                <h1>BuyAtOnce!</h1>
            </Link>
            <div className="navBar__links">
                <Link className="button" to="/categorias/cafe_especialidad">Café de especialidad</Link>
                <Link className="button" to="/categorias/accesorios">Accesorios</Link>
                <Link className="button" to="/categorias/molinos">Molinos</Link>
                <Link className="button" to="/categorias/metodos_de_filtrado">Métodos de filtrado</Link>
                <Link className="button" to="/categorias/maquinas_expreso">Maquinas Espresso</Link>
            </div>
            <CartWidget/>
        </nav>
     );
}

export default NavBar;