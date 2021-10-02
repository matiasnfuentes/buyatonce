import { PRODUCTOS } from './data.js';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    let {id} = useParams();
    const [product, setProduct] = useState({title: "loading", id:-1, price: -1, imagePath:{detail:"/loading.gif"}, description: "loading"});

    useEffect(()=>{

        const getProduct = new Promise((res,rej)=>{
            setTimeout( () => res(PRODUCTOS.find(p => p.id == id)), 2000)
        })

        getProduct.then( (product) => {
            setProduct(product)
        })

    },[id])

    return ( <ItemDetail item={product}/> );
}
 
export default ItemDetailContainer;