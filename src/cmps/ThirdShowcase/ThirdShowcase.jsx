import './ThirdShowcase.scss'
import { ButtonTranparent } from '../ButtonTranparent/ButtonTranparent'
import { useHistory } from 'react-router'


export const ThirdShowcase = () => {
    const history = useHistory()

    return (
        <article className="third-showcase main-container flex">
            <div className="img" />
            <section className="product-title-container">
                <h4>YX1 EARPHONES</h4>
                <ButtonTranparent txt="SEE PRODUCT" onClick={() => {history.push('/products/1')}}/>
            </section>
        </article>
    )
}

