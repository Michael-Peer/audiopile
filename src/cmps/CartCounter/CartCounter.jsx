

import './CartCounter.scss'

export const CartCounter = ({ height = 48, width = 40 }) => {

    return (
        <div className="cart-counter flex">
            <div style={{ height: height + 'px', width: width + 'px' }} className="cart-counter-item cart-counter-sign flex center"><span>-</span></div>
            <div style={{ height: height + 'px', width: width + 'px' }} className="cart-counter-item flex center"><span>0</span></div>
            <div style={{ height: height + 'px', width: width + 'px' }} className="cart-counter-item cart-counter-sign flex center"><span>+</span></div>
        </div>
    )
}

