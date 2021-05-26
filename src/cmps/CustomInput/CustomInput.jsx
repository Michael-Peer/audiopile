

import { Fragment } from 'react'
import './CustomInput.scss'

export const CustomInput = (props) => {

    return (
        <div className="custom-input-container">
            <label className="custom-input-label" htmlFor="input">Name</label>
            <input type="email" className="custom-input" id="input"  placeholder="Insert your name"></input>
        </div>
    )
}

