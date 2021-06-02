import { useHistory } from 'react-router'
import { ButtonTranparent } from '../ButtonTranparent/ButtonTranparent'
import './SecondShowcase.scss'

export const SecondShowcase = () => {
    const history = useHistory()

    return (
        <article className="second-showcase main-container">
            <section className="content">
                <h4 className="product-title">ZX7 SPEAKER</h4>
                <ButtonTranparent txt="SEE PRODUCT" onClick={() => {history.push('/products/5')}} />
            </section>
        </article>
    )
}

