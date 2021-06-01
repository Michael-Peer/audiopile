

import './AlsoLikeItemPreview.scss'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'

export const AlsoLikeItemPreview = ({imgUrl, productName}) => {

    return (
        <div className="also-like-item-preview flex column align-center">
            <div className="img-wrapper">
                <img src={imgUrl} />
            </div>
            <h5 className="product-name">{productName}</h5>
            <ButtonFilled txt="SEE PRODUCT" width={160} />
        </div>
    )
}

