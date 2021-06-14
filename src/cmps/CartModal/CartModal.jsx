

import './CartModal.scss'
import { CartModalItemPreview } from '../CartModalItemPreview/CartModalItemPreview'
import { ButtonFilled } from '../ButtonFilled'
import { Link } from 'react-router-dom'
import { CartCounter } from '../CartCounter/CartCounter'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeAllFromCart } from '../../store/actions/cartActions'
import { useWidth } from '../../hook/useWidth'




export const CartModal = ({ onCheckoutClicked }) => {


    const width = useWidth()

    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)

    const dispatch = useDispatch()




    const getImageBasedOnSize = (product) => {
        if (width > 768) {
            return product.image.desktop
        } else if (width < 768 && width > 500) {
            return product.image.tablet
        } else {
            return product.image.mobile
        }
    }

    const onCounterClicked = (diff, product) => {
        console.log('clicked', diff, product);
        if (product.quantity + diff < 0) {
            return
        }
        product.quantity += diff // 0 or x
        diff > 0 ? dispatch(increaseQuantity(product)) : dispatch(decreaseQuantity(product))
    }

    const removeAll = () => {
        dispatch(removeAllFromCart())
    }

    return (
        <div className="cart-modal">
            <div className="modal-header flex">
                <h6>{`Cart (${cart.length})`}</h6>
                <p className="remove-all-txt" onClick={removeAll}>Remove All</p>
            </div>
            <div className="cart-items">
                {cart.map(cartItem => {
                    return (
                        <div className="cart-item flex space-between align-center" key={cartItem.id}>
                            <CartModalItemPreview prodctName={cartItem.name} productPrice={`$ ${cartItem.price.toLocaleString()}`} imgUrl={getImageBasedOnSize(cartItem)} />
                            <CartCounter height={32} width={32} count={cartItem.quantity} onCounterClicked={(diff) => { onCounterClicked(diff, cartItem) }} />
                        </div>
                    )
                })}
            </div>

            <div className="total-container flex">
                <p className="total-container-txt">TOTAL</p>
                <h6>{`$ ${total.toLocaleString()}`}</h6>
            </div>
            <Link to={!cart.length ? '/' : '/checkout'}><ButtonFilled txt="CHECKOUT" onClick={onCheckoutClicked} /></Link>
        </div>
    )
}

