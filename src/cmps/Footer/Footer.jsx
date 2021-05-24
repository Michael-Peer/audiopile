

import { NavBar } from '../NavBar/NavBar'
import Logo from '../../imgs/logo.svg'
import FacebookIcon from '../../imgs/social-networks/icon-facebook.svg'
import TwitterIcon from '../../imgs/social-networks/icon-twitter.svg'
import InstagramIcon from '../../imgs/social-networks/icon-instagram.svg'

import './Footer.scss'

export const Footer = (props) => {

    return (
        <div className="footer">
            <nav className="main-nav main-container flex align-center space-between main-container">
                <img className="logo" src={Logo} alt="logo" />
                <ul className="clean-list flex">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">HEADPHONES</a></li>
                    <li><a href="#">SPEAKERS</a></li>
                    <li><a href="#">EARPHONES</a></li>
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

