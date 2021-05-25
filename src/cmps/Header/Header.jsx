import './Header.scss'
import Cart from '../../imgs/icon-cart.svg'
import Logo from '../../imgs/logo.svg'
import { NavBar } from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {

    return (
        <header className="header">
            <nav className="main-nav main-container flex align-center space-between">
                <img className="logo" src={Logo} alt="logo" />
                <ul className="clean-list flex">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/headphones">HEADPHONES</NavLink></li>
                    <li><NavLink to="/speakers">SPEAKERS</NavLink></li>
                    <li><NavLink to="/earphones">EARPHONES</NavLink></li>
                </ul>
                {/* <NavBar/> */}
                <img className="cart" src={Cart} alt="cart" />
            </nav>
            <div className="stroke main-container"></div>
        </header>
    )
}

