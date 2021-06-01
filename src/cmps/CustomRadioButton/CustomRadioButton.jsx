

import './CustomRadioButton.scss'

export const CustomRadioButton = ({label, name= ''}) => {

    return (
        <div className="custom-radio-button-container">
            <input name={name}  type="radio" id={label}></input>
            <label className="custom-radio-button-label flex align-center" htmlFor={label}>
                <span className="custom-radio-button"></span>
                {label}
            </label>
        </div>
    )
}

