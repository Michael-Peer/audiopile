import './ThirdShowcase.scss'
import Earphone from '../../imgs/product-showcase/image-earphones-yx1.jpg'
import { ButtonTranparent } from '../ButtonTranparent/ButtonTranparent'


export const ThirdShowcase = (props) => {

    return (
        <article className="third-showcase main-container flex">
            <img src={Earphone} alt="earphones" />
            <section className="product-title-container">
                <h2>YX1 EARPHONES</h2>
                <ButtonTranparent txt="SEE PRODUCT"/>
            </section>
        </article>
    )
}

