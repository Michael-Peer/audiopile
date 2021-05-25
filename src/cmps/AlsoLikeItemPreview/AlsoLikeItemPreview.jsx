

import './AlsoLikeItemPreview.scss'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'
import MarkOne from '../../imgs/also-like/image-xx99-mark-one-headphones.jpg'

export const AlsoLikeItemPreview = (props) => {

    return (
        <div className="also-like-item-preview flex column align-center">
            <div className="img-wrapper">
                <img src={MarkOne} alt="" />
            </div>
            <h5 className="product-name">XX99 MARK I</h5>
            <ButtonFilled txt="SEE PRODUCT" />
        </div>
    )
}

