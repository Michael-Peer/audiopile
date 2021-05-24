

import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import MarkTwo from '../../imgs/categoryPageItem/image-xx99-mark-two.jpg'
import MarkOne from '../../imgs/categoryPageItem/image-xx99-mark-one.jpg'
import XX59 from '../../imgs/categoryPageItem/image-xx59.jpg'
import './HeadphoneCategoryPage.scss'

export const HeadphoneCategoryPage = () => {

    return (
        <div>
            <CategoryTitle title="Headphones" />
            <CategoryPageItemLeft imgUrl={MarkTwo} isNewProduct />
            <CategoryPageItemLeft imgUrl={XX59} />
        </div>
    )
}

