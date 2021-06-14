
import { useState, useEffect } from 'react'
import { BaseModal } from '../../cmps/BaseModal/BaseModal'

import { ButtonFilled } from '../../cmps/ButtonFilled'
import { CartModalItemPreview } from '../../cmps/CartModalItemPreview/CartModalItemPreview'
import { CustomInput } from '../../cmps/CustomInput/CustomInput'
import { CustomRadioButton } from '../../cmps/CustomRadioButton/CustomRadioButton'
import { PurchaseModal } from '../../cmps/PurchaseModal/PurchaseModal'
import './CheckoutPage.scss'

import { ItemsCount } from '../../cmps/ItemsCount/ItemsCount'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Field, Formik } from 'formik'
import { updateTotal } from '../../store/actions/cartActions'
import { useWidth } from '../../hook/useWidth'



export const CheckoutPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const width = useWidth()
    const history = useHistory()
    const dispatch = useDispatch()


    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)

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


    return (
        <article className="checkout-page main-container">
            {isModalOpen && <BaseModal><PurchaseModal onCheckoutClicked={() => { setIsModalOpen(false) }} /></BaseModal>}
            <p className="go-back" onClick={() => { history.goBack() }}>Go Back</p>
            <section className="checkout flex">

                <Formik
                    initialValues={{ name: '', email: '', phone: '', address: '', zip: '', city: '', country: '', eMoneyNumber: '', eMoneyPin: '' }}
                    onSubmit={data => {
                        console.log('data from form', data);
                    }}>
                    {({ values, handleChange, handleBlur, handleSubmit }) => (

                        <form className="checkout-form" onSubmit={handleSubmit}>
                            <h3>Checkout</h3>

                            <p className="checkout-form-title">Billing Details</p>
                            <div className="billing-details-container flex flex-wrap">
                                <Field name="name" label="Name" type="input" as={CustomInput} placeholder="Alexei Ward" />
                                <Field name="email" label="Email Address" type="email" as={CustomInput} placeholder="alexei@mail.com" />
                                <Field name="phone" label="Phone Number" type="number" as={CustomInput} placeholder="+1 202-555-0136" />
                                {/* <CustomInput placeholder="Alexei Ward" label="Name" onChange={handleChange} onBlur={handleBlur} value={values.name} name="name" /> */}

                                {/* 
                                <CustomInput placeholder="alexei@mail.com" label="Email Address" />
                                <CustomInput placeholder="+1 202-555-0136" label="Phone Number" /> */}
                            </div>

                            {/* <pre>{JSON.stringify(values)}</pre>
                            <button type="submit"></button> */}

                            <p className="checkout-form-title">Shipping Info</p>
                            <div className="shipping-info-container flex flex-wrap">
                                <Field name="address" label="Address" type="input" as={CustomInput} placeholder="1137 Williams Avenue" />
                                <Field name="zip" label="ZIP Code" type="number" as={CustomInput} placeholder="10001" />
                                <Field name="city" label="City" type="input" as={CustomInput} placeholder="New York" />
                                <Field name="country" placeholder="United States" label="Country" type="input" as={CustomInput} />
                                {/* <CustomInput placeholder="1137 Williams Avenue" label="Address" />
                                <CustomInput placeholder="10001" label="ZIP Code" />
                                <CustomInput placeholder="New York" label="City" />
                                <CustomInput placeholder="United States" label="Country" /> */}
                            </div>

                            <p className="checkout-form-title">Payment Details</p>
                            <p className="payment-methods">Payment Methods</p>
                            <div className="payment-details-container flex column">
                                <div className="radio-container flex column align-end">
                                    <CustomRadioButton label="e-Money" name="payment" />
                                    <CustomRadioButton label="Cash on Delivery" name="payment" />
                                </div>
                                <div className="payment-details-inputs-container flex">
                                    <Field name="eMoneyNumber" placeholder="238521993" label="e-Money Number" type="number" as={CustomInput} />
                                    <Field name="eMoneyPin" placeholder="6891" label="e-Money PIN" type="number" as={CustomInput} />
                                    {/* <CustomInput placeholder="238521993" label="e-Money Number" />
                                    <CustomInput placeholder="6891" label="e-Money PIN" /> */}
                                </div>
                            </div>

                            <button>sadsdadsaads</button>
                        </form>
                    )}


                </Formik>


                <div className="summary">
                    <h6 className="summary-title">Summary</h6>
                    <div className="items">
                        {cart.map(cartItem => {
                            return (
                                <div className="checkout-item flex align-center space-between" key={cartItem.id}>
                                    <CartModalItemPreview prodctName={cartItem.name} productPrice={`$ ${cartItem.price.toLocaleString()}`} imgUrl={getImageBasedOnSize(cartItem)} />
                                    <ItemsCount count={cartItem.quantity} />
                                </div>
                            )
                        })}
                        {/* <div className="checkout-item flex align-center space-between">
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
                        </div> */}

                    </div>

                    <div className="checkout-txt-row flex space-between justify-center">
                        <p className="checkout-txt">Total</p>
                        <h6>{`$ ${total.toLocaleString()}`}</h6>
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
                        <h6 className="total-price">{`$ ${(total + 50 + 1079).toLocaleString()}`}</h6>
                    </div>

                    <ButtonFilled txt="CONTINUE AND PAY" onClick={() => {
                        if (!cart.length) return
                        const totalPrice = total + 50 + 1079
                        dispatch(updateTotal(totalPrice))
                        setIsModalOpen(!isModalOpen)
                    }} />
                </div>
            </section>
        </article>
    )
}

