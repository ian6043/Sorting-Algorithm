import React from 'react'
import { useState } from "react"
import Slider from './components/Slider';
import Button from './components/Button';
import { wait } from '@testing-library/react';

const SortingVisualizer=() =>{

    const [array, setArray] = useState([])
    const [numOfItems,setNumOfItems] = useState(100)
    

    const createArray = () =>{
        let array =[]
        for(let i =0; i< numOfItems; i++){
            array.push(getRandomInt(10,700));
        }
        setArray(array)
        console.log("Create Array"+array.length+" "+numOfItems)

    }

    const getRandomInt = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min) 
    }

    const changeNumOfItems = (e)=>{
        let num = e.target.value
        setNumOfItems(num)
        createArray()
        console.log("ChnageNum of Items"+array.length+" "+numOfItems)

    }
    
    const mergeSort =()=> {

    }

    const bubbleSort =()=> {

    }

    const insertionSort =()=> {

    }

    const quickSort =()=> {

    }

    const heapSort =()=> {

    }

    const testAlgorithms =()=>{
        for(let i=0; i<100; i++){
            const testArray =[];
            for(let j=0; j< getRandomInt(10,1000);j++){
                testArray.push(getRandomInt(0,1000));
            }
            const sortedArray= array.sort((a,b)=>a - b);
            //call sorting function
            //console log the comparison
        }

    }

    if (array.length===0) {createArray()}

     return(
         <>
         <div className="array-buttons">
            <button className="button" onClick={createArray}>Create New Array</button>
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
            <Button text={'Merge Sort'} onClick={mergeSort}/>
            <Button text={'Bubble Sort'} onClick={bubbleSort}/>
            <Button text={'Insertion Sort'} onClick={insertionSort}/>
            <Button text={'Quick Sort'} onClick={quickSort}/>
            <Button text={'Heap Sort'} onClick={heapSort}/>
         </div>


         </>
     );
 }
export default SortingVisualizer
