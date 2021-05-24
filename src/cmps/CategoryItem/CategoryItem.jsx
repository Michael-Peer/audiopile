

import { ButtonOutlined } from '../ButtonOutlined/ButtonOutlined'
import Headphones from '../../imgs/categories/image-headphones.png'
import './CategoryItem.scss'

export const CategoryItem = (props) => {

    return (
        <div className="category-item">
            <div className="background">
                <img src={Headphones} />
                <h2 className="title">HEADPHONES</h2>
                <ButtonOutlined txt="SHOP" />
            </div>
        </div>
    )
}

