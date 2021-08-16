import React from 'react'
import { useState } from "react"
const Slider = ({text}) => {

    const [value, setValue] = useState(50)
    
    let onChange =(e) => setValue(e.target.value)

    return (
    <div className="slidecontainer">
        <div className="slide-value">{text}{value}</div>
        <input type="range" min="1" max="100" value={value} class="slider" onChange={onChange}/>
        
     </div>
    )
}

export default Slider
