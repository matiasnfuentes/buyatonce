import { useState } from "react"

const Order = ({saveOrder, showModal, setModalText}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    const validateAndSaveOrder = () => {
        if (name !== '' && validateEmail(email) && phone !== ''){
            saveOrder({name, email, phone})
        } else {
            setModalText("Debe ingresar correctamente sus campos para confimar su compra!")
            showModal()
        }
    }

    return ( <div className="order">
                <div className="order__inputGroup">
                    <input className="order__input" placeholder="Nombre" onChange={ event => setName(event.target.value)}></input>
                    <input className="order__input" placeholder="Email" onChange={ event => setEmail(event.target.value)}></input>
                    <input className="order__input" placeholder="Teléfono" onChange={ event => setPhone(event.target.value)}></input>
                </div>
                <button type="button" className="button" onClick={validateAndSaveOrder}>Confirmar compra!</button>
             </div> )
}
 
export default Order