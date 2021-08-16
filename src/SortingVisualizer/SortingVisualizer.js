import React from 'react'
import Slider from './components/Slider';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
    componentDidMount(){
        this.createArray();
    }

    createArray(){
        const array=[];
        for(let i =0; i< 200; i++){
            array.push(this.getRandomInt(10,700));
        }
        this.setState({array});
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min); 
    }


     render(){

        const {array} = this.state;

         return(
             <>
             <button className="button" onClick={()=>this.createArray()}>Create New Array</button>
             <Slider text={'Array Size: '}/>
             
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
}
