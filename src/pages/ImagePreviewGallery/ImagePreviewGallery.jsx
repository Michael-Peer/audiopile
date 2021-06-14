
import { useWidth } from '../../hook/useWidth'


import './ImagePreviewGallery.scss'

export const ImagePreviewGallery = ({ gallery }) => {

    const width = useWidth()

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
                <img src={getImageBasedOnSize(gallery.first)} alt={gallery.first}></img>
                <img src={getImageBasedOnSize(gallery.second)} alt={gallery.second}></img>

            </div>
            {/* <img src={width > 780 ? Image3 : Image3Mobile} alt="" /> */}
            <img src={getImageBasedOnSize(gallery.third)} alt={gallery.third}></img>

        </div>
    )
}

