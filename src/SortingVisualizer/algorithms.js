
export function mergeSort(array){
    const animations= [];
    if(array.length<=1) return array;
    const tempArray = array.slice();
    mergeSortRecursive(array,0, array.length-1,tempArray,animations);
    return animations;
}

function mergeSortRecursive(array,first,last,tempArray,animations){
    if(first === last) return;
    const middle = Math.floor((first+last)/2);
    mergeSortRecursive(tempArray,first,middle,array,animations);
    mergeSortRecursive(tempArray,middle+1,last,array,animations);
    Merge(array,first,middle,last,tempArray,animations);
}

function Merge(array,first,middle,last,tempArray,animations){
    let k = first;
    let i = first;
    let j = middle+1;
    while (i<=middle && j<=last){
        
        animations.push([i,j]);
        animations.push([i,j]);
        if(tempArray[i]<=tempArray[j]){
            animations.push([k,tempArray[i]]);
            array[k++]=tempArray[i++];
        } else{
            animations.push([k,tempArray[j]]);
            array[k++]=tempArray[j++]
        }
    } 
    while(i<=middle){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,tempArray[i]]);
        array[k++]=tempArray[i++];
    }
    while(j<=last){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,tempArray[j]]);
        array[k++]=tempArray[j++];
    }
}

export const insertionSort = (array)=>{
    const animations = [];
    let length = array.length;
    for(let i = 1; i<length;i++){
        let current = array[i];
        let j = i-1;
        while(j >= 0 && array[j]>current){
            array[j+1]= array[j];
            j--;
        }
        array[j+1]=current;
    }
    return array;
}


export const bubbleSort = (array, animations =[])=>{
    
}

export const quickSort = (array, animations =[])=>{
    
}

export const heapSort = (array, animations =[])=>{
    
}

export const areArraysEqual=(a, b)=>{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  
}