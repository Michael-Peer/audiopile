

import './ButtonFilled.scss'

export const ButtonFilled = ({ txt, onClick = () => {}, width }) => {

    return (
        <div style={{ width: width ? width + 'px' : '' }} className="button-filled flex center" onClick={() => { onClick() }}>{txt}</div>
    )
}

