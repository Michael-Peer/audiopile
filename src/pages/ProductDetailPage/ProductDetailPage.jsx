

import './ProductDetailPage.scss'
import { ButtonFilled } from '../../cmps/ButtonFilled/ButtonFilled';
import { CartCounter } from '../../cmps/CartCounter/CartCounter'
import MarkTwo from '../../imgs/mark-two/image-product.jpg'
import MarkTwoTablet from '../../imgs/mark-two/tablet/image-product.jpg'
import MarkTwoMobile from '../../imgs/mark-two/mobile/image-product.jpg'

import { InTheBoxCounter } from '../../cmps/InTheBoxCounter/InTheBoxCounter';
import { ImagePreviewGallery } from '../ImagePreviewGallery/ImagePreviewGallery';
import { AlsoLikeProducts } from '../../cmps/AlsoLikeProducts/AlsoLikeProducts';
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'
import { useEffect, useState } from 'react';

export const ProductDetailPage = () => {
    const [width, setWidth] = useState(window.innerWidth)

    //calculate screen width
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <article className="product-detail main-container">
            <p className="go-back">Go Back</p>
            <section className="product-preview-container flex">
                <img src={width > 768 ? MarkTwo : MarkTwoMobile} alt="headphone" />
                <div className="txt-wrapper flex column justify-center">
                    <h3 className="product-label">New Product</h3>
                    <h2 className="product-title">XX99 Mark II Headphones</h2>
                    <p className="product-txt">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <h6 className="price">$ 2,999</h6>
                    <div className="cart-actions-container flex">
                        <CartCounter />
                        <ButtonFilled txt="ADD TO CART" width={160} />
                    </div>
                </div>
            </section>

            <section className="product-features flex">
                <div className="product-features-text flex column">
                    <h3 className="title">Features</h3>
                    <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
                    <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                </div>
                <div className="product-features-contain flex column">
                    <h3 className="title">In the box</h3>
                    <div className="product-features-contain-items">
                        <InTheBoxCounter count={1} txt="Headphone Unit" />
                        <InTheBoxCounter count={2} txt="Replacement Earcups" />
                        <InTheBoxCounter count={1} txt="User Manual" />
                        <InTheBoxCounter count={1} txt="3.5mm 5m Audio Cable" />
                        <InTheBoxCounter count={1} txt="Travel Bag" />
                    </div>
                </div>
            </section>

            <section className="gallery ">
                <ImagePreviewGallery />
            </section>

            <section className="also-like">
                <AlsoLikeProducts />
            </section>

            <CategoryList />

            <FourthShowcase />
        </article>
    )
}

