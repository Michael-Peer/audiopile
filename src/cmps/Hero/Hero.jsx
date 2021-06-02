

import './Hero.scss'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'
import { useHistory } from 'react-router'

export const Hero = () => {
    const history = useHistory()
    return (
        <article className="hero">
            <div className="content-wrapper  main-container">
                <section className="content flex column">
                    <h3 className="product-label">NEW PRODUCT</h3>
                    <h1 className="product-title">XX99 Mark II Headphones</h1>
                    <p className="product-desc">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <ButtonFilled txt="SEE PRODUCT" width={160} onClick={() => {history.push('/products/4')}} />
                </section>
                {/* <img src={heroImage} alt="hero image" /> */}
            </div>
            <div className="header-img"></div>

        </article>
    )
}

