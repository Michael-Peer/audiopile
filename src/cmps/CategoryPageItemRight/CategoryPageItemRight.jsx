

import { ButtonFilled } from '../ButtonFilled/ButtonFilled'
import './CategoryPageItemRight.scss'

export const CategoryPageItemRight = ({ imgUrl }) => {

    return (
        <div className="category-page-item-right main-container flex">
            <div className="txt-wrapper flex column justify-center">
                <h2 className="product-title">XX99 Mark II Headphones</h2>
                <p className="product-txt">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                <ButtonFilled txt="SEE PRODUCT" />
            </div>
            <img src={imgUrl} alt="headphone" />
        </div>
    )
}

