

import './Hero.scss'
import heroImage from '../../imgs/image-hero.jpg'
import { ButtonFilled } from '../ButtonFilled/ButtonFilled'

export const Hero = (props) => {

    return (
        <article className="hero">
            <div className="content-wrapper  main-container">
                <section className="content">
                    <h3 className="product-label">NEW PRODUCT</h3>
                    <h1 className="product-title">XX99 Mark II Headphones</h1>
                    <p className="product-desc">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <ButtonFilled txt="SEE PRODUCT" />
                </section>

                <img src={heroImage} alt="hero image" />
            </div>
        </article>
    )
}

