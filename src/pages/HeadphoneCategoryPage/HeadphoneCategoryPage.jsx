

import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'
import MarkTwo from '../../imgs/categoryPageItem/image-xx99-mark-two.jpg'
import MarkOne from '../../imgs/categoryPageItem/image-xx99-mark-one.jpg'
import XX59 from '../../imgs/categoryPageItem/image-xx59.jpg'
import './HeadphoneCategoryPage.scss'
import { CategoryPageItemRight } from '../../cmps/CategoryPageItemRight/CategoryPageItemRight'

export const HeadphoneCategoryPage = () => {

    return (
        <div>
            <CategoryTitle title="Headphones" />
            <CategoryPageItemLeft imgUrl={MarkTwo} isNewProduct />
            <CategoryPageItemRight imgUrl={MarkOne} />
            <CategoryPageItemLeft imgUrl={XX59} />
            <CategoryList />
            <FourthShowcase />
        </div>
    )
}

