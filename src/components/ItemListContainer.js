import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from 'react';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{

        const productsToGet= [
            {title: "Prod 1", id:1, price: 100, imagePath:"./250x300.png", description: "Prod 1"},
            {title: "Prod 2", id:2, price: 100, imagePath:"./250x300.png", description: "Prod 2"},
            {title: "Prod 3", id:3, price: 100, imagePath:"./250x300.png", description: "Prod 3"},
            {title: "Prod 4", id:4, price: 100, imagePath:"./250x300.png", description: "Prod 4"},
            {title: "Prod 5", id:5, price: 100, imagePath:"./250x300.png", description: "Prod 5"},
            {title: "Prod 6", id:6, price: 100, imagePath:"./250x300.png", description: "Prod 6"},
            {title: "Prod 7", id:7, price: 100, imagePath:"./250x300.png", description: "Prod 7"},
            {title: "Prod 8", id:8, price: 100, imagePath:"./250x300.png", description: "Prod 8"},
            {title: "Prod 9", id:9, price: 100, imagePath:"./250x300.png", description: "Prod 9"}
        ]

        const getProducts = new Promise((res,rej)=>{
            setTimeout( () => res(productsToGet), 2000)
        })

        getProducts.then( (products) => {
            setProductos(products)
        })

    },[])

    return (<>
                <ItemCount initial={1} stock={5}/>
                <div className="itemList">
                    <ItemList items={productos}/>
                </div>
            </>);
}
 
export default ItemListContainer;