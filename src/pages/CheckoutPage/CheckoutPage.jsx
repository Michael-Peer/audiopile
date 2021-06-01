
import { useState } from 'react'
import { BaseModal } from '../../cmps/BaseModal/BaseModal'

import { ButtonFilled } from '../../cmps/ButtonFilled'
import { CartModalItemPreview } from '../../cmps/CartModalItemPreview/CartModalItemPreview'
import { CustomInput } from '../../cmps/CustomInput/CustomInput'
import { CustomRadioButton } from '../../cmps/CustomRadioButton/CustomRadioButton'
import { PurchaseModal } from '../../cmps/PurchaseModal/PurchaseModal'
import './CheckoutPage.scss'

import MarkTwo from '../../imgs/also-like/image-xx99-mark-two-headphones.jpg'
import XX59 from '../../imgs/also-like/image-xx59-headphones.jpg'
import YX1 from '../../imgs/also-like/image-yx1-earphones.jpg'
import { ItemsCount } from '../../cmps/ItemsCount/ItemsCount'


export const CheckoutPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <article className="checkout-page main-container">
            {isModalOpen && <BaseModal><PurchaseModal onCheckoutClicked={() => { setIsModalOpen(false) }} /></BaseModal>}
            <p className="go-back">Go Back</p>
            <section className="checkout flex">

                <form className="checkout-form">
                    <h3>Checkout</h3>

                    <p className="checkout-form-title">Billing Details</p>
                    <div className="billing-details-container flex flex-wrap">
                        <CustomInput placeholder="Alexei Ward" label="Name" />
                        <CustomInput placeholder="alexei@mail.com" label="Email Address" />
                        <CustomInput placeholder="+1 202-555-0136" label="Phone Number" />
                    </div>

                    <p className="checkout-form-title">Shipping Info</p>
                    <div className="shipping-info-container flex flex-wrap">
                        <CustomInput placeholder="1137 Williams Avenue" label="Address" />
                        <CustomInput placeholder="10001" label="ZIP Code" />
                        <CustomInput placeholder="New York" label="City" />
                        <CustomInput placeholder="United States" label="Country" />
                    </div>

                    <p className="checkout-form-title">Payment Details</p>
                    <p className="payment-methods">Payment Methods</p>
                    <div className="payment-details-container flex column">
                        <div className="radio-container flex column align-end">
                            <CustomRadioButton label="e-Money" name="payment" />
                            <CustomRadioButton label="Cash on Delivery" name="payment" />
                        </div>
                        <div className="payment-details-inputs-container flex">
                            <CustomInput placeholder="238521993" label="e-Money Number" />
                            <CustomInput placeholder="6891" label="e-Money PIN" />
                        </div>

                    </div>
                </form>

                <div className="summary">
                    <h6 className="summary-title">Summary</h6>
                    <div className="items">
                        <div className="checkout-item flex align-center space-between">
                            <CartModalItemPreview prodctName="XX99 MK II" productPrice="$ 2,999" imgUrl={MarkTwo} />
                            <ItemsCount count={1} />
                        </div>
                        <div className="checkout-item flex align-center space-between">
                            <CartModalItemPreview prodctName="XX59" productPrice="$ 899" imgUrl={XX59} />
                            <ItemsCount count={2} />
                        </div>
                        <div className="checkout-item flex align-center space-between">
                            <CartModalItemPreview prodctName="YX1" productPrice="$ 599" imgUrl={YX1} />
                            <ItemsCount count={1} />
                        </div>

                    </div>

                    <div className="checkout-txt-row flex space-between justify-center">
                        <p className="checkout-txt">Total</p>
                        <h6>$ 5,396</h6>
                    </div>
                    <div className="checkout-txt-row flex space-between justify-center">
                        <p className="checkout-txt"> SHIPPING</p>
                        <h6>$ 50</h6>
                    </div>
                    <div className="checkout-txt-row flex space-between justify-center">
                        <p className="checkout-txt">VAT (INCLUDED)</p>
                        <h6>$ 1,079</h6>
                    </div>
                    <div className="checkout-txt-row flex space-between justify-center">
                        <p className="checkout-txt">GRAND TOTAL</p>
                        <h6 className="total-price">$ 5,446</h6>
                    </div>

                    <ButtonFilled txt="CONTINUE AND PAY" onClick={() => { setIsModalOpen(!isModalOpen) }} />
                </div>
            </section>
        </article>
    )
}

