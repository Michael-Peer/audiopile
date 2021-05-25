import './CartModalItemPreview.scss'

import { CartCounter } from '../CartCounter/CartCounter'

import MarkTwo from '../../imgs/also-like/image-xx99-mark-two-headphones.jpg'


export const CartModalItemPreview = (props) => {

    return (
        <div className="cart-modal-item-preview flex center">
            <img src={MarkTwo} />
            <div className="product-details flex column justify-center">
                <p className="product-name">XX99 MK II</p>
                <p className="product-price">$ 2,999</p>
            </div>
            <CartCounter height={32} width={32} />
        </div>
    )
}

