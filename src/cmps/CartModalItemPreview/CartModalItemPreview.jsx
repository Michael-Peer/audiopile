import './CartModalItemPreview.scss'



export const CartModalItemPreview = ({prodctName, productPrice, imgUrl}) => {

    return (
        <div className="cart-modal-item-preview flex ">
            <img src={imgUrl} />
            <div className="product-details flex column justify-center">
                <p className="product-name">{prodctName}</p>
                <p className="product-price">{productPrice}</p>
            </div>
        </div>
    )
}

