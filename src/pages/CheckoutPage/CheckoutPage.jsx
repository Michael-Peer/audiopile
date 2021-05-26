

import { ButtonFilled } from '../../cmps/ButtonFilled'
import { CartModalItemPreview } from '../../cmps/CartModalItemPreview/CartModalItemPreview'
import { CustomInput } from '../../cmps/CustomInput/CustomInput'
import { CustomRadioButton } from '../../cmps/CustomRadioButton/CustomRadioButton'
import './CheckoutPage.scss'

export const CheckoutPage = () => {

    return (
        <article className="checkout-page main-container">
            <p className="go-back">Go Back</p>
            <section className="checkout flex">

                <form className="checkout-form">
                    <h3>Checkout</h3>

                    <p className="checkout-form-title">Billing Details</p>
                    <div className="billing-details-container flex flex-wrap">
                        <CustomInput />
                        <CustomInput />
                        <CustomInput />
                    </div>

                    <p className="checkout-form-title">Shipping Info</p>
                    <div className="shipping-info-container flex flex-wrap">
                        <CustomInput />
                        <CustomInput />
                        <CustomInput />
                        <CustomInput />
                    </div>

                    <p className="checkout-form-title">Payment Details</p>
                    <p className="payment-methods">Payment Methods</p>
                    <div className="payment-details-container flex column">
                        <div className="radio-container flex column align-end">
                            <CustomRadioButton />
                            <CustomRadioButton />
                        </div>
                        <div className="payment-details-inputs-container flex">
                            <CustomInput />
                            <CustomInput />
                        </div>

                    </div>
                </form>

                <div className="summary">
                    <h6>Summary</h6>
                    <div className="items">
                        <CartModalItemPreview />
                        <CartModalItemPreview />
                        <CartModalItemPreview />
                    </div>
                    <p className="checkout-txt">Total</p>
                    <p className="checkout-txt"> SHIPPING</p>
                    <p className="checkout-txt">VAT (INCLUDED)</p>
                    <p className="checkout-txt">GRAND TOTAL</p>
                    <ButtonFilled txt="CONTINUE AND PAY" />
                </div>
            </section>
        </article>
    )
}

