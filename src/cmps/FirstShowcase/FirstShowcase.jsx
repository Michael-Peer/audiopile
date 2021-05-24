

import './FirstShowcase.scss'
import Speaker from '../../imgs/product-showcase/image-speaker-zx9.png'
import { ButtonTranparent } from '../ButtonTranparent/ButtonTranparent'


export const FirstShowcase = (props) => {

    return (
        <section className="first-showcase main-container flex space-between">
            <img className="spekaer-img" src={Speaker} alt="Speaker" />
            <div className="content">
                <h1 className="product-title">ZX9 SPEAKER</h1>
                <p className="product-desc">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <ButtonTranparent txt="SEE PRODUCTS" />
            </div>
        </section>
    )
}

