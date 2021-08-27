 //MERGESORT
export function mergeSort(array){
    const animations= [];
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
        
        animations.push(['current',i,j,0,0,'red']);

        if(tempArray[i]<=tempArray[j]){
            animations.push(['changeOne',k,i,tempArray[i],0,'red']);
            animations.push(['current',i,j,0,0,'steelblue']);
            array[k++]=tempArray[i++];
        } else{
            animations.push(['changeOne',k,j,tempArray[j],0,'red']);
            animations.push(['current',i,j,0,0,'steelblue']);
            array[k++]=tempArray[j++]
        }

    } 
    while(i<=middle){
        animations.push(['current',i,i,0,0,'red']);
        animations.push(['changeOne',k,i,tempArray[i],0,'red']);
        animations.push(['current',i,i,0,0,'steelblue']);
        array[k++]=tempArray[i++];

    }
    while(j<=last){
        animations.push(['current',j,j,0,0,'red']);
        animations.push(['changeOne',k,j,tempArray[j],0,'red']);
        animations.push(['current',j,j,0,0,'steelblue']);
        array[k++]=tempArray[j++];
    }
}
//INSERTIONSORT
//TO DO FIX LAST ELEMENT SWITCH
export const insertionSort = (array)=>{
    const animations = [];
    const tempArray = array.slice();
    let length = array.length;
    for(let i = 1; i<length;i++){
        let current = tempArray[i];
        let j = i-1;
        animations.push(['current',i,i,0,0,'green']);

        while(j >= 0 && tempArray[j]>current){
            animations.push(['current',j,j+1,0,0,'red']);
            animations.push(['swap',j+1,j,tempArray[j+1],tempArray[j],'red']);
            animations.push(['current',j,j+1,0,0,'steelblue']);
            animations.push(['current',i,i,0,0,'green']);
            tempArray[j+1]= tempArray[j];
            j--;
        }
        animations.push(['current',j+1,j+1,0,0,'steelblue']);
        animations.push(['swap',i,j+1,current,tempArray[j+1],'red']);
        tempArray[j+1]=current;
    }
    animations.push();
    animations.push(['current',length-1,length-1,0,0,'steelblue']);
    return animations;
}

//BUBBLESORT
export const bubbleSort = (array)=>{
    const animations = [];
    const tempArray = array.slice();
    for(var i = 0; i < array.length; i++){
     
        for(var j = 0; j < ( array.length - i -1 ); j++){
            animations.push(['current',j,j+1,0,0,'red']);
            if(tempArray[j] > tempArray[j+1]){
                var temp = tempArray[j];
                animations.push(['swap',j,j+1,tempArray[j],tempArray[j+1],'red']);
                tempArray[j] = tempArray[j + 1];
                tempArray[j+1] = temp;
          }
          animations.push(['current',j,j+1,0,0,'steelblue']);
        }
      }
    return animations;
}

//QUICKSORT
export const quickSort = (array)=>{
    const animations = [];
    const tempArray = array.slice();
    quickSortIterative(tempArray, animations);
    return animations;
}

function quickSortIterative(tempArray, animations){
    let stack = [];
    
    stack.push(0);
    stack.push(tempArray.length - 1);
    

    while(stack[stack.length - 1] >= 0){
        
    	let last = stack.pop();
        let first = stack.pop();
        
        let pivotIndex = partition(tempArray, first, last);

        if (pivotIndex - 1 > first){
        	stack.push(first);
            stack.push(pivotIndex - 1);
		}

        if (pivotIndex + 1 < last){
        	stack.push(pivotIndex + 1);
            stack.push(last);
        }
    }
}

function partition(tempArray, first, last, animations){
    const pivot = tempArray[last];
    let index = first;
    for(let i = first; i<last; i++){
        if(tempArray[i] < pivot){
            var temp = tempArray[i];
            tempArray[i]= tempArray[index];
            tempArray[index]= temp;
        }
        index++;
    }
    var tempSwap = tempArray[last];
    tempArray[last]= tempArray[index];
    tempArray[index] = tempSwap;
    return index;
}


//HEAPSORT
export const heapSort = (array)=>{
    const animations = [];
    const tempArray = array.slice();

    return animations;
}



//used for testing algorithms in the beginning
export const areArraysEqual=(a, b)=>{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  
}