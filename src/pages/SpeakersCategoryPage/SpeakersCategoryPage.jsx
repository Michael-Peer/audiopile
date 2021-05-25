

import './SpeakersCategoryPage.scss'
import ZX7 from '../../imgs/categoryPageItem/speakers/image-zx7.jpg'
import ZX9 from '../../imgs/categoryPageItem/speakers/image-zx9.jpg'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryPageItemRight } from '../../cmps/CategoryPageItemRight/CategoryPageItemRight'
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'


export const SpeakersCategoryPage = () => {

    return (
        <div>
            <CategoryTitle title="Spearkers" />
            <CategoryPageItemLeft imgUrl={ZX9} isNewProduct />
            <CategoryPageItemRight imgUrl={ZX7} />
            <CategoryList />
            <FourthShowcase />
        </div>
    )
}

