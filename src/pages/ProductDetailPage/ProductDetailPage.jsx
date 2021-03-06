

import './ProductDetailPage.scss'

import { useWidth } from '../../hook/useWidth'
import { useHistory, useParams } from 'react-router';
import { productService } from '../../services/productService';

import { ButtonFilled } from '../../cmps/ButtonFilled/ButtonFilled';
import { CartCounter } from '../../cmps/CartCounter/CartCounter'
import { InTheBoxCounter } from '../../cmps/InTheBoxCounter/InTheBoxCounter';
import { ImagePreviewGallery } from '../ImagePreviewGallery/ImagePreviewGallery';
import { AlsoLikeProducts } from '../../cmps/AlsoLikeProducts/AlsoLikeProducts';
import { CategoryList } from '../../cmps/CategoryList/CategoryList'
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { useEffect, useState } from 'react';


export const ProductDetailPage = () => {
    const width = useWidth()
    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const product = productService.getById(+id)
        setProduct(product)
    }, [id, product])


    const getImageBasedOnSize = () => {
        if (width > 768) {
            return product.image.desktop
        } else if (width < 768 && width > 600) {
            console.log(product, 'tablet');
            return product.image.tablet
        } else {
            return product.image.mobile
        }
    }


    const onCounterClicked = (diff) => {
        console.log('onCountClickedHandler');
        const counter = count + diff
        setCount(counter < 0 ? 0 : counter)
    }

    const onAddToCartClicked = () => {
        product.quantity = count
        if (!product.quantity) return
        dispatch(addToCart(product))
    }

    return (
        <>
            {product &&
                <article className="product-detail main-container">
                    <p className="go-back" onClick={() => { history.goBack() }}>Go Back</p>
                    <section className="product-preview-container flex">
                        <img src={getImageBasedOnSize()} alt="headphone" />
                        <div className="txt-wrapper flex column justify-center">
                            <h3 className="product-label">New Product</h3>
                            <h2 className="product-title">{product.name}</h2>
                            <p className="product-txt">{product.description}</p>
                            <h6 className="price">$ {product.price.toLocaleString()}</h6>
                            <div className="cart-actions-container flex">
                                <CartCounter count={count} onCounterClicked={onCounterClicked} />
                                <ButtonFilled txt="ADD TO CART" width={160} onClick={onAddToCartClicked} />
                            </div>
                        </div>
                    </section>

                    <section className="product-features flex">
                        <div className="product-features-text flex column">
                            <h3 className="title">Features</h3>
                            <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you???re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you???ll never miss a beat.</p>
                            <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                        </div>
                        <div className="product-features-contain flex column">
                            <h3 className="title">In the box</h3>
                            <div className="product-features-contain-items">
                                {product.includes.map((include) => <InTheBoxCounter count={include.quantity} txt={include.item} key={include.item} />)}
                                {/* <InTheBoxCounter count={1} txt="Headphone Unit" />
                                <InTheBoxCounter count={2} txt="Replacement Earcups" />
                                <InTheBoxCounter count={1} txt="User Manual" />
                                <InTheBoxCounter count={1} txt="3.5mm 5m Audio Cable" />
                                <InTheBoxCounter count={1} txt="Travel Bag" /> */}
                            </div>
                        </div>
                    </section>

                    <section className="gallery ">
                        <ImagePreviewGallery gallery={product.gallery} />
                    </section>

                    <section className="also-like">
                        <AlsoLikeProducts othersList={product.others} />
                    </section>

                    <CategoryList />

                    <FourthShowcase />
                </article>}
        </>
    )
}

