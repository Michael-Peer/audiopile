

import './CartModal.scss'
import ReactDOM from 'react-dom'
import { CartModalItemPreview } from '../CartModalItemPreview/CartModalItemPreview'
import { ButtonFilled } from '../ButtonFilled'
import { Link } from 'react-router-dom'

export const CartModal = ({ onCheckoutClicked }) => {

    const cartModalRoot = document.getElementById('cart-modal')

    return ReactDOM.createPortal(
        <div className="cart-modal modal-layer">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header flex">
                        <h6>Cart (3)</h6>
                        <p className="remove-all-txt">Remove All</p>
                    </div>
                    <CartModalItemPreview />
                    <CartModalItemPreview />
                    <CartModalItemPreview />
                    <div className="total-container flex">
                        <p className="total-container-txt">TOTAL</p>
                        <h6>$ 5,396</h6>
                    </div>
                    <Link to="/checkout" onClick={() => { onCheckoutClicked() }}><ButtonFilled txt="CHECKOUT" /></Link>
                </div>
            </div>
        </div>,
        cartModalRoot
    )
}

