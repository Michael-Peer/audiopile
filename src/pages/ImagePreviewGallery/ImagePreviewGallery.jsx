
import { useEffect, useState } from 'react'
import Image1 from '../../imgs/mark-two/image-gallery-1.jpg'
import Image2 from '../../imgs/mark-two/image-gallery-2.jpg'
import Image3 from '../../imgs/mark-two/image-gallery-3.jpg'


import Image1Tablet from '../../imgs/mark-two/tablet/image-gallery-1.jpg'
import Image2Tablet from '../../imgs/mark-two/tablet/image-gallery-2.jpg'
import Image3Tablet from '../../imgs/mark-two/tablet/image-gallery-3.jpg'

import Image1Mobile from '../../imgs/mark-two/mobile/image-gallery-1.jpg'
import Image2Mobile from '../../imgs/mark-two/mobile/image-gallery-2.jpg'
import Image3Mobile from '../../imgs/mark-two/mobile/image-gallery-3.jpg'


import './ImagePreviewGallery.scss'

export const ImagePreviewGallery = ({ gallery }) => {
    const [width, setWidth] = useState(window.innerWidth)

    //calculate screen width
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const getImageBasedOnSize = (image) => {
        if (width > 768) {
            return image.desktop
        } else if (width < 768 && width > 500) {
            console.log('tablet', image.tablet);
            return image.tablet
        } else {
            return image.mobile
        }
    }

    return (
        <div className="main-container image-preview-gallery flex center">
            <div className="left-container flex column">
                {/* <img src={width > 780 ? Image1 : Image1Mobile} alt="" />
                <img src={width > 780 ? Image2 : Image2Mobile} alt="" /> */}
                <img src={getImageBasedOnSize(gallery.first)}></img>
                <img src={getImageBasedOnSize(gallery.second)}></img>

            </div>
            {/* <img src={width > 780 ? Image3 : Image3Mobile} alt="" /> */}
            <img src={getImageBasedOnSize(gallery.third)}></img>

        </div>
    )
}

