

import { useHistory } from 'react-router'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'
import './CategoryPageItemRight.scss'

export const CategoryPageItemRight = ({ imgUrl, product }) => {
    const history = useHistory()

    return (
        <div className="category-page-item-right main-container flex">
            <div className="txt-wrapper flex column justify-center">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-txt">{product.description}</p>
                <ButtonFilled txt="SEE PRODUCT" width={160} onClick={() => {history.push(`/products/${product.id}`)}} />
            </div>
            <img src={imgUrl} alt="headphone" />
        </div>
    )
}

