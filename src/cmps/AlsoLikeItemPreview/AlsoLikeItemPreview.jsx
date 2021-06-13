

import './AlsoLikeItemPreview.scss'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'
import { useHistory } from 'react-router'
import { productService } from '../../services/productService'

export const AlsoLikeItemPreview = ({ imgUrl, productName, id }) => {
    const history = useHistory()


    return (
        <div className="also-like-item-preview flex column align-center">
            <div className="img-wrapper">
                <img src={imgUrl} alt="image" />
            </div>
            <h5 className="product-name">{productName}</h5>
            <ButtonFilled txt="SEE PRODUCT" width={160} onClick={() => { history.push(`/products/${id}`) }} />
        </div>
    )
}

