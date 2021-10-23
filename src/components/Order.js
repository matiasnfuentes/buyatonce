import { useState } from "react"

const Order = ({saveOrder}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const validateAndSaveOrder = () => {
        if (name != '' && email != '' && phone != ''){
            saveOrder({name, email, phone})
            
        }
    }

    return ( <div className="order">
                <div className="order__inputGroup">
                    <input className="order__input" placeholder="Nombre" onChange={ event => setName(event.target.value)}></input>
                    <input className="order__input" placeholder="Email" onChange={ event => setEmail(event.target.value)}></input>
                    <input className="order__input" placeholder="Teléfono" onChange={ event => setPhone(event.target.value)}></input>
                </div>
                <button type="button" className="button" onClick={validateAndSaveOrder}>Confirmar compra!</button>
             </div> );
}
 
export default Order;