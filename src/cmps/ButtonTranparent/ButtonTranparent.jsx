

import './ButtonTranparent.scss'
export const ButtonTranparent = ({ txt, onClick = () => { } }) => {

    return (
        <div className="button-transparent flex center" onClick={() => { onClick() }}>
            {txt}
        </div>
    )
}
