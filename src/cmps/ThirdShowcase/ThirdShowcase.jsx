import './ThirdShowcase.scss'
import Earphone from '../../imgs/product-showcase/image-earphones-yx1.jpg'
import { ButtonTranparent } from '../ButtonTranparent/ButtonTranparent'


export const ThirdShowcase = (props) => {

    return (
        <article className="third-showcase main-container flex">
            <div className="img" />
            <section className="product-title-container">
                <h4>YX1 EARPHONES</h4>
                <ButtonTranparent txt="SEE PRODUCT"/>
            </section>
        </article>
    )
}

