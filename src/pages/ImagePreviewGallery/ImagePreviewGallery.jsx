
import Image1 from '../../imgs/mark-two/image-gallery-1.jpg'
import Image2 from '../../imgs/mark-two/image-gallery-2.jpg'
import Image3 from '../../imgs/mark-two/image-gallery-3.jpg'

import './ImagePreviewGallery.scss'

export const ImagePreviewGallery = (props) => {

    return (
        <div className="image-preview-gallery flex center">
            <div className="left-container flex column">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
            </div>
            <img src={Image3} alt="" />
        </div>
    )
}

