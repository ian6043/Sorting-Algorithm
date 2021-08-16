import React from 'react'
import { useState } from "react"
import Slider from './components/Slider';

const SortingVisualizer=() =>{

    const [array, setArray] = useState([])
    const [numOfItems,setNumOfItems] = useState(100)
    

    const createArray = (number) =>{
        let array =[]
        for(let i =0; i< number; i++){
            array.push(getRandomInt(10,700));
        }
        setArray(array)

    }

    const getRandomInt = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min) 
    }

    const changeNumOfItems =(num)=>{
        setNumOfItems(num)
        createArray(numOfItems)
    }

    if (array.length===0) {createArray(100)}

     return(
         <>
         <button className="button" onClick={()=>createArray(numOfItems)}>Create New Array</button>
         <Slider text={'Array Size: '} min={10} max={300} onResize={changeNumOfItems}/>
         <div className="array-container">
         {array.map((value,idx) =>(
            <div 
            className="array-item" 
            key={idx}
            style ={{height: `${value}px`}}
            >
            </div>
         ))}
         </div>
         </>
     );
 }
export default SortingVisualizer
