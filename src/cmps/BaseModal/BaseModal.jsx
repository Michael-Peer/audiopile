

import './BaseModal.scss'
import ReactDOM from 'react-dom'


export const BaseModal = ({ children }) => {

    const modalRoot = document.getElementById('cart-modal')

    return ReactDOM.createPortal(
        <div className="base-modal modal-layer">
            <div className="modal-wrapper">
                {children}
            </div>
        </div>,
        modalRoot
    )
}

