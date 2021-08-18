import React from 'react'

const Button = ({text,onClick}) => {
    return (
        <div className="sort-button">
            <button className="sort-button-text">{text}</button>
        </div>
    )
}

export default Button
