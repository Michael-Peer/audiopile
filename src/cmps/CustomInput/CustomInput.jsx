

import { Fragment } from 'react'
import './CustomInput.scss'

export const CustomInput = ({placeholder, label}) => {

    return (
        <div className="custom-input-container">
            <label className="custom-input-label" htmlFor={label}>{label}</label>
            <input type="text" className="custom-input" id={label}  placeholder={placeholder}></input>
        </div>
    )
}

