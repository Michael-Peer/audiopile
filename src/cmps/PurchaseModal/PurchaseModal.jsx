

import { CartModalItemPreview } from '../CartModalItemPreview/CartModalItemPreview'
import { ButtonFilled } from '../ButtonFilled'
import './PurchaseModal.scss'

import MarkTwo from '../../imgs/also-like/image-xx99-mark-two-headphones.jpg'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


export const PurchaseModal = (props) => {
    const history = useHistory()
    const [width, setWidth] = useState(window.innerWidth)
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)

    //calculate screen width
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getImageBasedOnSize = (product) => {
        if (width > 768) {
            console.log('getting desktop');
            return product.image.desktop
        } else if (width < 768 && width > 500) {
            console.log('getting tablet');
            return product.image.tablet
        } else {
            console.log('getting mobile');
            return product.image.mobile
        }
    }

    const onBackToHomeClicked = () => history.replace('/')

    return (
        <div className="purchase-modal">
            <div className="v-circle flex center">V</div>
            <h3>THANK YOU FOR YOUR ORDER</h3>
            <p className="confirmation-txt">You will receive an email confirmation shortly.</p>

            <div className="order-summary flex">

                <div className="item-preview flex column align-center">
                    {/* <CartModalItemPreview prodctName="XX99 MK II" productPrice="$ 2,999" imgUrl={MarkTwo} /> */}
                    <CartModalItemPreview prodctName={cart[0].name} productPrice={`$ ${cart[0].price.toLocaleString()}`} imgUrl={getImageBasedOnSize(cart[0])} />

                    <div className="line"></div>
                    {/* <p className="other-items-txt">and 2 other item(s)</p> */}
                    <p className="other-items-txt">{`and ${cart.length - 1} other item(s)`}</p>

                </div>

                <div className="total-preview">
                    <p className="total-txt">GRAND TOTAL</p>
                    {/* <h6>$ 5,446</h6> */}
                    <h6>{`$ ${total.toLocaleString()}`}</h6>
                </div>
            </div>
            <ButtonFilled txt="BACK TO HOME" onClick={onBackToHomeClicked} />
        </div>
    )
}

