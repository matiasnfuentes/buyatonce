import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { useParams } from "react-router"; 
import { firestore } from "../firebase";

const ItemListContainer = () => {

    const fakeProduct = {title: "loading", id:"-", price: "-", image: "/loading.gif", description: "loading"}
    const [productos, setProductos] = useState([fakeProduct]);
    const {id} = useParams();

    useEffect( () => {

        const collectionRef = firestore.collection("products");
        let query;

        if (id === undefined) {
            query = collectionRef.get();
        } else {
            query = collectionRef.where('category', '==', id).get();
        }


        query
            .then( (result) => {
                setProductos(result.docs.map( p => ({id: p.id, ...p.data()})) )
            })
            .catch( error => console.log(error))

    },[id])

    return (<>
                <div className="itemList">
                    <ItemList items={productos}/>
                </div>
            </>);
}
 
export default ItemListContainer;