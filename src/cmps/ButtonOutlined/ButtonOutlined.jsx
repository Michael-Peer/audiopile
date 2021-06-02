

import './ButtonOutlined.scss'

export const ButtonOutlined = ({ txt, onClick = () => { } }) => {

    return (
        <span className="button-outlined flex center" onClick={() => { onClick() }}>
            {txt}
        </span>
    )
}

