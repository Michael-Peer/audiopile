

import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'

import MarkTwo from '../../imgs/categoryPageItem/image-xx99-mark-two.jpg'
import MarkTwoTablet from '../../imgs/categoryPageItem/headphones/tablet/image-xx99-mark-two.jpg'
import MarkTwoMobile from '../../imgs/categoryPageItem/headphones/mobile/image-xx99-mark-two.jpg'

import MarkOne from '../../imgs/categoryPageItem/image-xx99-mark-one.jpg'
import MarkOneTablet from '../../imgs/categoryPageItem/headphones/tablet/image-xx99-mark-one.jpg'
import MarkOneMobile from '../../imgs/categoryPageItem/headphones/mobile/image-xx99-mark-one.jpg'

import XX59 from '../../imgs/categoryPageItem/image-xx59.jpg'
import XX59Tablet from '../../imgs/categoryPageItem/headphones/tablet/image-xx59.jpg'
import XX59TMobile from '../../imgs/categoryPageItem/headphones/mobile/image-xx59.jpg'

import './HeadphoneCategoryPage.scss'
import { CategoryPageItemRight } from '../../cmps/CategoryPageItemRight/CategoryPageItemRight'
import { useEffect, useState } from 'react'

export const HeadphoneCategoryPage = () => {
    const [width, setWidth] = useState(window.innerWidth)

    //calculate screen width
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // const setImage = (imgType) => {
    //     if (width > 768) {
    //         return imgType
    //     } else if (width < 768 && width > 375) {
    //         return imgType + 'Tablet'
    //     }
    //     console.log(imgType + 'Mobile');
    //     return imgType + 'Mobile'
    // }



    return (
        <div>
            <CategoryTitle title="Headphones" />
            <CategoryPageItemLeft imgUrl={width > 768 ? MarkTwo : MarkTwoMobile} isNewProduct />
            <CategoryPageItemRight imgUrl={width > 768 ? MarkOne : MarkOneMobile} />
            <CategoryPageItemLeft imgUrl={width > 768 ? XX59 : XX59TMobile} />
            <CategoryList />
            <FourthShowcase />
        </div>
    )
}

