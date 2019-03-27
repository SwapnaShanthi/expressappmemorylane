import React, { Component } from 'react';

import todostyle from './style/todo.css'


class TaskList extends Component {

  constructor(props){
    super(props);
  }

  

  render() {
    const displayList = this.props.todoList.map((item,index)=>{
      if(item.visibility){
        return(<li key={index}><div className={item.buttonColor} onClick={()=>{this.props.checkItems(index)}}></div><div className="listdiv">{item.itemDisplayName}</div></li>)
      }
      return null;
    });
    return (
     <div className="tasklistdiv">
        
      
              <ul>
              {displayList}

              </ul>
        
     </div>
    );
  }
}

export default TaskList;