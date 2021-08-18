import React from 'react'
import { useState } from "react"
import PropTypes from 'prop-types'

const Slider = ({text,min,max,onResize}) => {

    const [value, setValue] = useState(100)
    
    const onChange =(e) => {
        setValue(e.target.value)
        onResize(e)
    }

    return (
    <div className="slidecontainer">
        <div className="slide-value">{text}{value}</div>
        <input type="range" min={min} max={max} value={value} step="5" class="slider" onChange={onChange} onMouseUp={onChange}/>
        
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
