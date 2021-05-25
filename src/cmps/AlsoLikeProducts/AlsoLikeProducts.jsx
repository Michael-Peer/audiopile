

import { AlsoLikeItemPreview } from '../AlsoLikeItemPreview/AlsoLikeItemPreview'
import './AlsoLikeProducts.scss'

export const AlsoLikeProducts = (props) => {

    return (
        <div className="also-like-products">
            <h3 className="title">you may also like</h3>
            <div className="preview-list-demo flex">
                <AlsoLikeItemPreview />
                <AlsoLikeItemPreview />
                <AlsoLikeItemPreview />
            </div>

        </div>
    )
}

