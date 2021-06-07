

import './CustomInput.scss'

export const CustomInput = ({ placeholder, label, name = '', value = '', onChange = () => { }, onBlur = () => {} }) => {

    return (
        <div className="custom-input-container">
            <label className="custom-input-label" htmlFor={label}>{label}</label>
            <input type="text" className="custom-input" id={label} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} name={name}></input>
        </div>
    )
}

