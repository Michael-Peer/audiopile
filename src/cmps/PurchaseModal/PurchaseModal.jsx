

import { CartModalItemPreview } from '../CartModalItemPreview/CartModalItemPreview'
import { ButtonFilled } from '../ButtonFilled'
import './PurchaseModal.scss'

import MarkTwo from '../../imgs/also-like/image-xx99-mark-two-headphones.jpg'
import { useHistory } from 'react-router'


export const PurchaseModal = (props) => {
    const history = useHistory()

    const onBackToHomeClicked = () => history.replace('/')

    return (
        <div className="purchase-modal">
            <div className="v-circle flex center">V</div>
            <h3>THANK YOU FOR YOUR ORDER</h3>
            <p className="confirmation-txt">You will receive an email confirmation shortly.</p>

            <div className="order-summary flex">

                <div className="item-preview flex column align-center">
                    <CartModalItemPreview prodctName="XX99 MK II" productPrice="$ 2,999" imgUrl={MarkTwo} />
                    <div className="line"></div>
                    <p className="other-items-txt">and 2 other item(s)</p>
                </div>

                <div className="total-preview">
                    <p className="total-txt">GRAND TOTAL</p>
                    <h6>$ 5,446</h6>
                </div>
            </div>
            <ButtonFilled txt="BACK TO HOME" onClick={onBackToHomeClicked} />
        </div>
    )
}

