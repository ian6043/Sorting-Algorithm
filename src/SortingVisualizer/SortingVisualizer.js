import React from 'react'
import { useState } from "react"
import Slider from './components/Slider';
import Button from './components/Button';
import * as algorithms from './algorithms';

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
    
    function mergeSort(){
        const animations = algorithms.mergeSort(array);
        animate(animations);
    }

    function bubbleSort() {
        const animations = algorithms.bubbleSort(array);
        animate(animations);
    }

    const insertionSort =()=> {
        const animations = algorithms.insertionSort(array);
        animate(animations);
    }

    const quickSort =()=> {
        const animations = algorithms.quickSort(array);
        animate(animations);
    }

    const heapSort =()=> {
        const animations = algorithms.heapSort(array);
        animate(animations);
    }
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
            } else if(detail ==='instant'){
                setTimeout(()=>{        
                    itemOneStyle.backgroundColor = color ;
                    itemTwoStyle.backgroundColor = color;
                   },0);
            }
        }
    }
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
    const printArray =()=>{
        for(let i =0; i<array.length;i++){
            console.log(array[i]);
        }
        console.log('---------------------');
    }

    if (array.length===0) {createArray()}

     return(
         <>
         <div className="array-buttons">
            <button className="button" onClick={createArray}>Create New Array</button>
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
            <Button text={'Merge Sort'} onClick={mergeSort}/>
            <Button text={'Bubble Sort'} onClick={bubbleSort}/>
            <Button text={'Insertion Sort'} onClick={insertionSort}/>
            <Button text={'Quick Sort'} onClick={quickSort}/>
            <Button text={'Heap Sort'} onClick={heapSort}/>
            <Button text={'Print'} onClick={printArray}/>
         </div>


         </>
     );
 }
export default SortingVisualizer
