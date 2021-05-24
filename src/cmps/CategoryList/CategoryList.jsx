

import { CategoryItem } from '../CategoryItem/CategoryItem'
import './CategoryList.scss'

export const CategoryList = (props) => {

    return (
        <div>
            <ul className="category-list main-container clean-list flex space-between">
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </ul>
        </div>
    )
}

