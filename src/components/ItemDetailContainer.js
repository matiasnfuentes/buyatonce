import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from "react-router"
import { firestore } from '../firebase'
import { useModal } from './ModalContext'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const fakeProduct = {title: "loading", id:"-", price: "-", image: "/loading.gif", description: "loading"}
    const [product, setProduct] = useState(fakeProduct)
    const {showModal, setModalText} = useModal()

    useEffect(()=>{

        const query = firestore.collection('products').doc(id).get()
        query
            .then( (result) => {
                setProduct({id: result.id, ...result.data()})
            })
            .catch( error => {
                setModalText("Ocurrió un error al tratar de obtener el producto")
                showModal()
            })
    },[id])

    return ( <ItemDetail item={product}/> )
}
 
export default ItemDetailContainer