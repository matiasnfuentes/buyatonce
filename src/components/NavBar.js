import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
        <nav className = "navBar">
            <h1>BuyAtOnce!</h1>
            <div className="navBar__links">
                <a href="#">Café de especialidad</a>
                <a href="#">Accesorios</a>
                <a href="#">Molinos</a>
                <a href="#">Métodos de filtrado</a>
                <a href="#">Maquinas Espresso</a>
            </div>
            <CartWidget/>
        </nav>
     );
}

export default NavBar;