import React from 'react'
import { useState } from "react"
import Slider from './components/Slider';
import Button from './components/Button';
import * as algorithms from './algorithms';

const SortingVisualizer=() =>{

    const [array, setArray] = useState([])
    const [numOfItems,setNumOfItems] = useState(100)
    
    // Building the Array
    const createArray = () =>{
        let array =[]
        for(let i =0; i< numOfItems; i++){
            array.push(getRandomInt(10,700));
        }
        setArray(array)
        console.log("Create Array"+array.length+" "+numOfItems)
    }
    //Generate random number for the heights of the array items
    const getRandomInt = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min) 
    }
    // Updates the state of the number of items in the array
    const changeNumOfItems = (e)=>{
        let num = e.target.value
        setNumOfItems(num)
        createArray()
        console.log("ChnageNum of Items"+array.length+" "+numOfItems)

    }

    //Calls Merge sort from algorithms.js
    function mergeSort(){
        const animations = algorithms.mergeSort(array);
        animate(animations);
    }

    //Calls bubble sort from algorithms.js
    function bubbleSort() {
        const animations = algorithms.bubbleSort(array);
        animate(animations);
    }

    //Calls insertion sort from algorithms.js
    const insertionSort =()=> {
        const animations = algorithms.insertionSort(array);
        animate(animations);
    }

    //Calls quick sort from algorithms.js
    const quickSort =()=> {
        const animations = algorithms.quickSort(array);
        animate(animations);
    }

    //Calls heap sort from algorithms.js
    const heapSort =()=> {
        const animations = algorithms.heapSort(array);
        animate(animations);
    }

    //Animation function that handells the chaning of colors and swapping of items
    function animate(animations){
        for(let i= 0;i< animations.length;i++){
            const arrayItems =document.getElementsByClassName("array-item");
            const [detail,itemOneIdx,itemTwoIdx,heightOne,heightTwo,color] = animations[i];
            const itemOneStyle = arrayItems[itemOneIdx].style;
            const itemTwoStyle = arrayItems[itemTwoIdx].style;
            if(detail ==='current'){
                setTimeout(()=>{
                    itemOneStyle.backgroundColor = color ;
                    itemTwoStyle.backgroundColor = color;
                }, i *10);
            } else if(detail ==='swap'){
                setTimeout(()=>{        
                    itemOneStyle.height= `${heightTwo}px`;
                    itemTwoStyle.height= `${heightOne}px`;
                   }, i *10);
            } else if(detail ==='changeOne'){
                setTimeout(()=>{        
                    itemOneStyle.height= `${heightOne}px`;
                   }, i *10);
            }
        }
    }

    // Commented out functions used for testing the algorithms


    // const testAlgorithms =()=>{
    //     for(let i=0; i<100; i++){
    //         const testArray =[];
    //         for(let j=0; j< getRandomInt(10,1000);j++){
    //             testArray.push(getRandomInt(0,1000));
    //         }
    //         const sortedArray= testArray.sort((a,b)=>a - b);
    //         const insertionArray = algorithms.insertionSort(testArray);
    //         //<Button text={'Test Button'} onClick={testAlgorithms}/>
    //         console.log(algorithms.areArraysEqual(sortedArray,insertionArray))
    //     }

    // }
    // const printArray =()=>{
    //     for(let i =0; i<array.length;i++){
    //         console.log(array[i]);
    //     }
    //     console.log('---------------------');
    // }

    //creates inital array
    if (array.length===0) {createArray()}


    // returns the html
     return(
         <>
         <div className="array-buttons">
             {/* Create New array button calls create array function */}
            <button className="button" onClick={createArray}>Create New Array</button>
            {/* Slider component made in slider.js */}
            <Slider text={'Array Size: '} min={10} max={200} onResize={changeNumOfItems}/>
         </div>
         <div className="array-container" >
            <div className="array-items">
            {array.map((value,idx) =>(
                <div 
                className="array-item" 
                key={idx}
                style ={{height: `${value}px`,width:`${80/numOfItems}%`,margin:`1px ${10/numOfItems}% 0 ${10/numOfItems}%`}}
                >
                </div>
            ))}
            </div>
         </div>
         <div className="sort-buttons">
             {/* Button componets made in a Button.js */}
            <Button text={'Merge Sort'} onClick={mergeSort}/>
            <Button text={'Bubble Sort'} onClick={bubbleSort}/>
            <Button text={'Insertion Sort'} onClick={insertionSort}/>
            <Button text={'Quick Sort'} onClick={quickSort}/>
            <Button text={'Heap Sort'} onClick={heapSort}/>
            {/* <Button text={'Print'} onClick={printArray}/> */}
         </div>


         </>
     );
 }
export default SortingVisualizer
