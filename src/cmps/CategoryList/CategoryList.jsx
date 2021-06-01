

import { CategoryItem } from '../CategoryItem/CategoryItem'
import Headphones from '../../imgs/categories/image-headphones.png'
import Speakers from '../../imgs/categories/image-speakers.png'
import Earphones from '../../imgs/categories/image-earphones.png'

import './CategoryList.scss'

export const CategoryList = (props) => {

    return (
        <div>
            <ul className="category-list main-container clean-list flex space-between">
                <CategoryItem productName="HEADPHONES" imgSrc={Headphones} />
                <CategoryItem productName="SPEAKERS" imgSrc={Speakers}/>
                <CategoryItem productName="EARPHONES" imgSrc={Earphones}/>
            </ul>
        </div>
    )
}

