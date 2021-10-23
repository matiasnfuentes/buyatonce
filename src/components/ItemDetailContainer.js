import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { firestore } from '../firebase';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const fakeProduct = {title: "loading", id:"-", price: "-", image: "/loading.gif", description: "loading"}
    const [product, setProduct] = useState(fakeProduct);

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