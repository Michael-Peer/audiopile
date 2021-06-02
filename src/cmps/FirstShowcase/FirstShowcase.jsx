

import './FirstShowcase.scss'
import { ButtonTranparent } from '../ButtonTranparent/ButtonTranparent'
import { useHistory } from 'react-router'


export const FirstShowcase = (props) => {
    const history = useHistory()


    return (
        <section className="first-showcase main-container flex space-between">
            {/* <img className="speaker-img" src={Speaker} alt="Speaker" /> */}
            <div className="speaker-img"></div>
            <div className="content">
                <h1 className="product-title">ZX9 SPEAKER</h1>
                <p className="product-desc">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <ButtonTranparent txt="SEE PRODUCT" onClick={() => {history.push('/products/6')}} />
            </div>
        </section>
    )
}

