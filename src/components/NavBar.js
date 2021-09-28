import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
        <nav className = "navBar">
            <h1>BuyAtOnce!</h1>
            <div className="navBar__links">
                <a className="button" href="#">Café de especialidad</a>
                <a className="button" href="#">Accesorios</a>
                <a className="button" href="#">Molinos</a>
                <a className="button" href="#">Métodos de filtrado</a>
                <a className="button" href="#">Maquinas Espresso</a>
            </div>
            <CartWidget/>
        </nav>
     );
}

export default NavBar;