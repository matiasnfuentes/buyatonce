import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { firestore } from '../firebase';

const ItemDetailContainer = () => {
    let {id} = useParams();
    const [product, setProduct] = useState({title: "loading", id:-1, price: -1, image: "/loading.gif", description: "loading"});

    useEffect(()=>{

        const query = firestore.collection('products').doc(id).get()
        query
            .then( (result) => {
                setProduct({id: result.id, ...result.data()})
            })
            .catch( error => console.log(error))
        

    },[id])

    return ( <ItemDetail item={product}/> );
}
 
export default ItemDetailContainer;