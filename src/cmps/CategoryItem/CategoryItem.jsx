

import { ButtonOutlined } from '../ButtonOutlined/ButtonOutlined'
import Headphones from '../../imgs/categories/image-headphones.png'
import './CategoryItem.scss'

export const CategoryItem = (props) => {

    return (
        <div className="category-item">
            <div className="background">
                <img src={Headphones} />
                <h6 className="title">HEADPHONES</h6>
                <ButtonOutlined txt="SHOP" />
            </div>
        </div>
    )
}

