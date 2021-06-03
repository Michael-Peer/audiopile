

import './CategoryPageItemLeft.scss'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'
import { useHistory } from 'react-router'

export const CategoryPageItemLeft = ({ imgUrl, product}) => {
    const history = useHistory()

    return (
        <div className="category-page-item-left main-container flex">
            <img src={imgUrl} alt="headphone" />
            {/* <div className="img" style={{backgroundImage: `url(${imgUrl})`}}></div> */}
            <div className="txt-wrapper flex column justify-center">
                {product.new && <h3 className="product-label">New Product</h3>}
                <h2 className="product-title">{product.name}</h2>
                <p className="product-txt">{product.description}</p>
                <ButtonFilled txt="SEE PRODUCT" width={160} onClick={() => {history.push(`/products/${product.id}`)}} />
            </div>
        </div>
    )
}

