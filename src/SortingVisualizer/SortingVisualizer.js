import React from 'react'
import { useState } from "react"
import Slider from './components/Slider';
import Button from './components/Button';

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
        console.log(numOfItems)

    }

    if (array.length===0) {createArray(100)}

     return(
         <>
         <div className="array-buttons">
            <button className="button" onClick={()=>createArray(numOfItems)}>Create New Array</button>
            <Slider text={'Array Size: '} min={10} max={200} onResize={changeNumOfItems}/>
         </div>
         <div className="array-container" >
         {array.map((value,idx) =>(
            <div 
            className="array-item" 
            key={idx}
            style ={{height: `${value}px`,width:`${80/numOfItems}%`,margin:`0 ${10/numOfItems}%`}}
            >
            </div>
         ))}
         </div>
         <div className="sort-buttons">
            <Button text={'Merge Sort'} className="sort-button"/>
            <Button text={'Bubble Sort'} className="sort-button"/>
            <Button text={'Insertion Sort'} className="sort-button"/>
            <Button text={'Quick Sort'} className="sort-button"/>
         </div>


         </>
     );
 }
export default SortingVisualizer
