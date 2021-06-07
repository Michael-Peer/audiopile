

import { AlsoLikeItemPreview } from '../AlsoLikeItemPreview/AlsoLikeItemPreview'
import './AlsoLikeProducts.scss'

import { useEffect, useState } from 'react';





export const AlsoLikeProducts = ({ othersList }) => {
    const [width, setWidth] = useState(window.innerWidth)

    console.log('others', othersList);

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
        <div className="also-like-products ">
            <h3 className="title">you may also like</h3>
            <div className="preview-list-demo flex">
                {othersList.map(other => <AlsoLikeItemPreview productName={other.name} imgUrl={getImageBasedOnSize(other)} id={other.id} key={other.name} />)}
                {/* <AlsoLikeItemPreview productName="XX59" imgUrl={width > 780 ? XX59 : XX59Mobile} />
                <AlsoLikeItemPreview productName="ZX9 SPEAKER" imgUrl={width > 780 ? ZX9 : ZX9Mobile} /> */}
            </div>

        </div>
    )
}

