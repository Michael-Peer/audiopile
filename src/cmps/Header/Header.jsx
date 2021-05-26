import './Header.scss'
import Cart from '../../imgs/icon-cart.svg'
import Logo from '../../imgs/logo.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { CartModal } from '../CartModal/CartModal'

export const Header = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <header className="header">
            <nav className="main-nav main-container flex align-center space-between">
                {isModalOpen && <CartModal onCheckoutClicked={() => { setIsModalOpen(false) }} />}
                <img className="logo" src={Logo} alt="logo" />
                <ul className="clean-list flex">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/headphones">HEADPHONES</NavLink></li>
                    <li><NavLink to="/speakers">SPEAKERS</NavLink></li>
                    <li><NavLink to="/earphones">EARPHONES</NavLink></li>
                </ul>
                {/* <NavBar/> */}
                <img className="cart" src={Cart} alt="cart" onClick={() => { setIsModalOpen(!isModalOpen) }} />
            </nav>
            <div className="stroke main-container"></div>
        </header>
    )
}

