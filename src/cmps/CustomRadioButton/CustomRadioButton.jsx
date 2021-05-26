

import './CustomRadioButton.scss'

export const CustomRadioButton = (props) => {

    return (
        <div className="custom-radio-button-container">
            <input type="radio" id="radio-input"></input>
            <label className="custom-radio-button-label flex align-center" htmlFor="radio-input">
                <span className="custom-radio-button"></span>
                Name
            </label>
        </div>
    )
}

