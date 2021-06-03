

import { useState } from 'react'
import './CartCounter.scss'

export const CartCounter = ({ height = 48, width = 40, count = 0, onCounterClicked = () => { } }) => {

    console.log('count', count);

    const onCountClickedHandler = diff => onCounterClicked(diff)



    return (
        <div className="cart-counter flex">
            <div style={{ height: height + 'px', width: width + 'px' }} className="cart-counter-item cart-counter-sign flex center" onClick={() => { onCountClickedHandler(-1) }}><span>-</span></div>
            <div style={{ height: height + 'px', width: width + 'px' }} className="cart-counter-item flex center"><span>{count}</span></div>
            <div style={{ height: height + 'px', width: width + 'px' }} className="cart-counter-item cart-counter-sign flex center" onClick={() => { onCountClickedHandler(1) }}><span>+</span></div>
        </div>
    )
}

