

import { AlsoLikeItemPreview } from '../AlsoLikeItemPreview/AlsoLikeItemPreview'
import './AlsoLikeProducts.scss'

import { useEffect, useState } from 'react';


import MarkOne from '../../imgs/also-like/image-xx99-mark-one-headphones.jpg'
import XX59 from '../../imgs/also-like/image-xx59-headphones.jpg'
import ZX9 from '../../imgs/also-like/image-zx9-speaker.jpg'

import MarkOneTablet from '../../imgs/also-like/tablet/image-xx99-mark-one-headphones.jpg'
import XX59Tablet from '../../imgs/also-like/tablet/image-xx59-headphones.jpg'
import ZX9Tablet from '../../imgs/also-like/tablet/image-zx9-speaker.jpg'

import MarkOneMobile from '../../imgs/also-like/mobile/image-xx99-mark-one-headphones.jpg'
import XX59Mobile from '../../imgs/also-like/mobile/image-xx59-headphones.jpg'
import ZX9Mobile from '../../imgs/also-like/mobile/image-zx9-speaker.jpg'




export const AlsoLikeProducts = () => {
    const [width, setWidth] = useState(window.innerWidth)

    //calculate screen width
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    return (
        <div className="also-like-products ">
            <h3 className="title">you may also like</h3>
            <div className="preview-list-demo flex">
                <AlsoLikeItemPreview productName="XX99 MARK I" imgUrl={width > 780 ? MarkOne : MarkOneMobile} />
                <AlsoLikeItemPreview productName="XX59" imgUrl={width > 780 ? XX59 : XX59Mobile} />
                <AlsoLikeItemPreview productName="ZX9 SPEAKER" imgUrl={width > 780 ? ZX9 : ZX9Mobile} />
            </div>

        </div>
    )
}

