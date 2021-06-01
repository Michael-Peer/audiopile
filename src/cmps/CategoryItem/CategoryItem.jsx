

import { ButtonOutlined } from '../ButtonOutlined/ButtonOutlined'
import './CategoryItem.scss'

export const CategoryItem = ({ imgSrc, productName }) => {

    return (
        <div className="category-item">
            <img src={imgSrc} />
            <div className="background">
                <h6 className="title">{productName}</h6>
                <ButtonOutlined txt="SHOP" />
            </div>
        </div>
    )
}

