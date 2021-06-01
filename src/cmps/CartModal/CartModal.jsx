

import './CartModal.scss'
import { CartModalItemPreview } from '../CartModalItemPreview/CartModalItemPreview'
import { ButtonFilled } from '../ButtonFilled'
import { Link } from 'react-router-dom'
import { CartCounter } from '../CartCounter/CartCounter'
import MarkTwo from '../../imgs/also-like/image-xx99-mark-two-headphones.jpg'
import XX59 from '../../imgs/also-like/image-xx59-headphones.jpg'
import YX1 from '../../imgs/also-like/image-yx1-earphones.jpg'



export const CartModal = ({ onCheckoutClicked }) => {

    return (
        <div className="cart-modal">
            <div className="modal-header flex">
                <h6>Cart (3)</h6>
                <p className="remove-all-txt">Remove All</p>
            </div>
            <div className="cart-items">
                <div className="cart-item flex space-between align-center">
                    <CartModalItemPreview prodctName="XX99 MK II" productPrice="$ 2,999" imgUrl={MarkTwo} />
                    <CartCounter height={32} width={32} />
                </div>
                <div className="cart-item flex space-between align-center">
                    <CartModalItemPreview prodctName="XX59" productPrice="$ 899" imgUrl={XX59} />
                    <CartCounter height={32} width={32} />
                </div>
                <div className="cart-item flex space-between align-center">
                    <CartModalItemPreview prodctName="YX1" productPrice="$ 599" imgUrl={YX1} />
                    <CartCounter height={32} width={32} />
                </div>
            </div>

            <div className="total-container flex">
                <p className="total-container-txt">TOTAL</p>
                <h6>$ 5,396</h6>
            </div>
            <Link to="/checkout"><ButtonFilled txt="CHECKOUT" onClick={onCheckoutClicked} /></Link>
        </div>
    )
}

