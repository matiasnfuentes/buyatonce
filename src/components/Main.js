import { Route, Switch } from "react-router";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer"

const Main = () => {
    return ( 
        <main className="container main">
            <Switch>
                <Route exact path="/">
                    <ItemListContainer/>
                </Route>
                <Route exact path="/categorias/:id">
                    <ItemListContainer/>
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </main>
     );
}

export default Main;