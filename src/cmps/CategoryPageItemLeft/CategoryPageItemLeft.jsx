

import './CategoryPageItemLeft.scss'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'

export const CategoryPageItemLeft = ({ imgUrl, isNewProduct }) => {

    return (
        <div className="category-page-item-left main-container flex">
            <img src={imgUrl} alt="headphone" />
            {/* <div className="img" style={{backgroundImage: `url(${imgUrl})`}}></div> */}
            <div className="txt-wrapper flex column justify-center">
                {isNewProduct && <h3 className="product-label">New Product</h3>}
                <h2 className="product-title">XX99 Mark II Headphones</h2>
                <p className="product-txt">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                <ButtonFilled txt="SEE PRODUCT" width={160} />
            </div>
        </div>
    )
}

