import React from 'react'

const Belts = (props) => {
    return (
        <>
            <div className="belt">
                <div style={{ background: props.color, color: props.txtColor, borderColor: props.borderColor }} >{props.title}</div>
                <span>{props.kyu}</span>
                <p>{props.txt}</p>
            </div>
        </>
    )
}

export default Belts