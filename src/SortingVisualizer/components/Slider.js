import React from 'react'
import { useState } from "react"
import PropTypes from 'prop-types'

const Slider = ({text,min,max,onResize}) => {

    const [value, setValue] = useState((min+max)/2)
    
    const onChange =(e) => {
        setValue(e.target.value)
        onResize(Number.parseInt(e.target.value))
    }

    return (
    <div className="slidecontainer">
        <div className="slide-value">{text}{value}</div>
        <input type="range" min={min} max={max} value={value} class="slider" onChange={onChange}/>
        
     </div>
    )
}

Slider.defaultProps ={
    min: 10,
    max: 100
}

Slider.propTypes={
    text: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number
}


export default Slider
