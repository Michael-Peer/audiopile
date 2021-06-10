import './Header.scss'
import Cart from '../../imgs/icon-cart.svg'
import Logo from '../../imgs/logo.svg'
import Hamburger from '../../imgs/icon-hamburger.svg'
import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { CartModal } from '../CartModal/CartModal'
import { BaseModal } from '../BaseModal/BaseModal'

export const Header = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const history = useHistory()

    return (
        <header className="header">
            <nav className="main-nav main-container flex align-center space-between">
                {isModalOpen && <BaseModal><CartModal onCheckoutClicked={() => { setIsModalOpen(false) }} /></BaseModal>}
                <img src={Hamburger} alt="" className="hamburger" />
                <img className="logo" src={Logo} alt="logo" onClick={() => { history.push('/') }} />
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

