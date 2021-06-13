

import './CategoetPage.scss'



import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'

import { CategoryPageItemRight } from '../../cmps/CategoryPageItemRight/CategoryPageItemRight'
import { useEffect, useState } from 'react'

import { productService } from '../../services/productService'
import { useParams } from 'react-router'

export const CategoetPage = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const { category } = useParams()
    const products = productService.getByCategory(category)

    console.log('products', products);

    //calculate screen width
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const getImageBasedOnSize = (product) => {
        if (width > 768) {
            console.log('getting desktop');
            return product.categoryImage.desktop
        } else if (width < 768 && width > 500) {
            console.log('getting tablet');
            return product.categoryImage.tablet
        } else {
            console.log('getting mobile');
            return product.categoryImage.mobile
        }
    }




    return (
        <div>
            <CategoryTitle title="Headphones" />
            {products.map((product, idx) => {
                if (idx % 2 === 0) {
                    return <CategoryPageItemLeft key={product.id} product={product} imgUrl={getImageBasedOnSize(product)} />
                }
                return <CategoryPageItemRight key={product.id} product={product} imgUrl={getImageBasedOnSize(product)} />
            })}
            {/* <CategoryPageItemLeft imgUrl={width > 768 ? MarkTwo : MarkTwoMobile} isNewProduct />
            <CategoryPageItemRight imgUrl={width > 768 ? MarkOne : MarkOneMobile} />
            <CategoryPageItemLeft imgUrl={width > 768 ? XX59 : XX59TMobile} /> */}
            <CategoryList />
            <FourthShowcase />
        </div>
    )
}

