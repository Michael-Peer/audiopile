

import Logo from '../../assets/logo.svg'
import FacebookIcon from '../../assets/social-networks/icon-facebook.svg'
import TwitterIcon from '../../assets/social-networks/icon-twitter.svg'
import InstagramIcon from '../../assets/social-networks/icon-instagram.svg'

import './Footer.scss'
import { NavLink } from 'react-router-dom'

export const Footer = (props) => {

    return (
        <div className="footer">
            <nav className="main-nav main-container flex align-center space-between main-container">
                <img className="logo" src={Logo} alt="logo" />
                <ul className="clean-list flex">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/headphones">HEADPHONES</NavLink></li>
                    <li><NavLink to="/speakers">SPEAKERS</NavLink></li>
                    <li><NavLink to="/earphones">EARPHONES</NavLink></li>
                </ul>
            </nav>
            <div className="footer-content-container flex main-container">
                <div className="txt-container flex column">
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <p>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="social-networks-container flex">
                    <img src={FacebookIcon} alt="facebook" />
                    <img src={TwitterIcon} alt="twitter" />
                    <img src={InstagramIcon} alt="instagram" />
                </div>
            </div>
        </div>
    )
}

