import { createContext , useState , useContext} from 'react'

const context = createContext()

const {Provider} = context

export const useModal = () => useContext(context)

const ModalProvider = ({children}) => {

    let [modalShowStatus, setModalShowStatus] = useState(false)
    let [modalText, setModalText] = useState("")

    const showModal = () => {
        setModalShowStatus(true)
    }

    const hideModal = () => {
        setModalShowStatus(false)
    }

    const contextValue = {
        modalShowStatus,
        modalText,
        showModal,
        hideModal,
        setModalText
    }

    return (
            <Provider value={contextValue}>
                {children}
            </Provider>
    )
}
 
export default ModalProvider