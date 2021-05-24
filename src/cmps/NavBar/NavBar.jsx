
import Logo from '../../imgs/logo.svg'

import { Fragment } from 'react'
import './NavBar.scss'

export const NavBar = (props) => {

    return (
        <>
            <img className="logo" src={Logo} alt="logo" />
            <ul className="clean-list flex nav-list">
                <li><a href="#">HOME</a></li>
                <li><a href="#">HEADPHONES</a></li>
                <li><a href="#">SPEAKERS</a></li>
                <li><a href="#">EARPHONES</a></li>
            </ul>
        </>
    )
}

