const Modal = ({modalShowStatus, hideModal, modalText}) => {
    return ( 
        modalShowStatus ?
                    (<div className="modal">
                        <p className="modal__text">{modalText}</p>
                        <div>
                            <button className="button" onClick = { hideModal }> Close </button>
                        </div>
                    </div>)
                    : <></> )
}
 
export default Modal