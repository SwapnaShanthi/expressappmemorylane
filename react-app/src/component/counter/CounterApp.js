import React, { Component } from 'react';
import './style/counter.css'

class CounterApp extends Component {constructor(props){
    super(props);
    this.state = {counters: [ {count:0} ]}
    }
    addCounter = () => {
                this.setState({ counters: [...this.state.counters, {count:0}] })
    }
    increment =  (idx)=>{
        this.state.counters[idx].count++;
        this.setState({counters: this.state.counters})

    }
    decrement =  (idx)=>{
        this.state.counters[idx].count--;
        this.setState({counters: this.state.counters})

    }
    render(){
        const Counter = this.state.counters.map( (counter, idx) => {
            console.log(+this.state.counters[idx].count);
            return(
            
                <div class="center">
                    
                    <h1 class="h1">{this.state.counters[idx].count}</h1>
                
                    <button class="button"
                        onClick={ () => {this.increment(idx)}} >
                        Increment
                    </button>
                    
                    <button class="button"
                        onClick={ () => {this.decrement(idx)} } >
                        Decrement
                    </button>
                </div>
            )});
        
    return  (
            <div>
                <button class="addbutton" onClick={ ()=>{this.addCounter()} }>
                    
                    Add Counter
                </button>
                {Counter}
        
                
        </div> 
        )
    }
}

export default CounterApp;