

import './InTheBoxCounter.scss'

export const InTheBoxCounter = ({ count, txt }) => {

    return (
        <div className="in-the-box-counter flex">
            <p className="counter" >{count}x</p>
            <p className="txt">{txt}</p>
        </div>
    )
}

