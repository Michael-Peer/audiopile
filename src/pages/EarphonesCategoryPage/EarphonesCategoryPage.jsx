

import './EarphonesCategoryPage.scss'
import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'
import YX1 from '../../imgs/categoryPageItem/earphones/image-yx1-earphones.jpg'

export const EarphonesCategoryPage = () => {

    return (
        <div>
            <CategoryTitle title="Earphones" />
            <CategoryPageItemLeft imgUrl={YX1} isNewProduct />
            <CategoryList />
            <FourthShowcase />
        </div>
    )
}

