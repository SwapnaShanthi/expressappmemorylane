import React, { Component } from 'react';

import todo from './style/todo.css'


class TaskSelector extends Component {

  constructor(props){
    super(props);
  }
  

  
  render() {

    const getcompletedItemCount=()=>{

      if(this.props.completedItemCount>1){
        return <div className="innerselectordiv">{this.props.completedItemCount} -  items left</div>
      }else{
        return <div className="innerselectordiv">{this.props.completedItemCount} -  item left</div>
      }

    }
    return (
     <div className="taskselectordiv">
           
            {getcompletedItemCount()}
            <div className="innerselectordiv"><button className="buttonselector" onClick={()=> this.props.selectItems("All")}>All</button></div>
            <div className="innerselectordiv"><button className="buttonselector" onClick={()=> this.props.selectItems("Active")}>Active</button></div>
            <div className="innerselectordiv"><button className="buttonselector" onClick={()=> this.props.selectItems("Completed")}>Completed</button></div>
         

     </div>
    );
  }
}

export default TaskSelector;