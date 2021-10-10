import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [currentStock, setStock] = useState(stock)
    const [initialValue, setInitialValue] = useState(initial)

    const addItem = () => { 
        if(currentStock>0){ 
            setStock(currentStock - 1)
            setInitialValue(initialValue + 1)
        } 
    }

    const removeItem = () => {
        if(initialValue>0){
            setInitialValue(initialValue - 1)
            setStock(currentStock + 1)
        }
    }

    const confirm = () => {
        onAdd(initialValue)
    }

    return (<div className="itemCount">
                <div className="itemCount__countContainer">
                    <button onClick ={removeItem} className="button itemCount__button">-</button>
                    <p className="itemCount__count">{initialValue}</p>
                    <button onClick ={addItem} className="button itemCount__button">+</button>
                </div>
                <button onClick ={confirm} className="button">Confirmar cantidad</button>
            </div> );
}
 
export default ItemCount;