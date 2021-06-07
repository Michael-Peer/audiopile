

import './FourthShowcase.scss'

export const FourthShowcase = (props) => {

    return (
        <article className="fourth-showcase main-container">
            <section className="content flex space-between align-center">
                <div className="content-txt-container">
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                {/* <img src={BestGear} alt="best gear" /> */}
                <div className="img"></div>
            </section>
        </article>
    )
}

