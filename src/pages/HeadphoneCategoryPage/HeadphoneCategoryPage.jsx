

import { CategoryPageItemLeft } from '../../cmps/CategoryPageItemLeft/CategoryPageItemLeft'
import { CategoryTitle } from '../../cmps/CategoryTitle/CategoryTitle'
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'

import './HeadphoneCategoryPage.scss'
import { CategoryPageItemRight } from '../../cmps/CategoryPageItemRight/CategoryPageItemRight'
import { useWidth } from '../../hook/useWidth'

import { productService } from '../../services/productService'

export const HeadphoneCategoryPage = () => {
    const width = useWidth()
    const products = productService.getByCategory('headphones')

    console.log('products', products);


    const getImageBasedOnSize = (product) => {
        if (width > 768) {
            console.log('getting desktop');
            return product.image.desktop
        } else if (width < 768 && width > 500) {
            console.log('getting tablet');
            return product.image.tablet
        } else {
            console.log('getting mobile');
            return product.image.mobile
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

