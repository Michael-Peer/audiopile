

import { CategoryItem } from '../CategoryItem/CategoryItem'
import Headphones from '../../imgs/categories/image-headphones.png'
import Speakers from '../../imgs/categories/image-speakers.png'
import Earphones from '../../imgs/categories/image-earphones.png'

import './CategoryList.scss'

export const CategoryList = () => {

    return (
        <div>
            <ul className="category-list main-container clean-list flex space-between">
                <CategoryItem productName="HEADPHONES" imgSrc={Headphones} redirectTo="/headphones" />
                <CategoryItem productName="SPEAKERS" imgSrc={Speakers} redirectTo="/speakers" />
                <CategoryItem productName="EARPHONES" imgSrc={Earphones} redirectTo="/earphones" />
            </ul>
        </div>
    )
}

