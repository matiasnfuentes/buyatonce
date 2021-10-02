import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { PRODUCTOS } from './data.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    let {id} = useParams();
    console.log(id)
    
    useEffect(()=>{
        console.log("en efecto")
        const getProducts = new Promise((res,rej)=>{
            setTimeout( () => {
                let productsToShow;
                if(id === undefined){
                    productsToShow = PRODUCTOS;
                }else{
                    productsToShow = PRODUCTOS.filter(p => p.categoria==id)
                }
                res(productsToShow)
            }, 2000)
        })

        getProducts.then( (products) => {
            setProductos(products)
        })

    },[id])

    return (<>
                <div className="itemList">
                    <ItemList items={productos}/>
                </div>
            </>);
}
 
export default ItemListContainer;