import React, { Component } from 'react';
import TaskReceive from './TaskReceive.js'
import TaskList from './TaskList.js'
import TaskSelector from './TaskSelector.js'
import Axios from 'axios'

import todostyle from './style/todo.css'



class TaskApp extends Component {

  constructor(props) {

    super(props);
    this.todoListItems = [];

    this.state = {
      todoList: this.todoListItems,
      itemList: "",
      error:""
    }


  }
  inserListItem = (itemList) => {
    Axios.post(`http://localhost:5000/addtolist`, {
      itemDisplayName: itemList
    })
    .then(res => {
      console.log(res);
      this.retrieveAll();
    })
    .catch(error => {
      this.setState({ error: "Server Down" });
    });

  }
  updateListItem = (itemList) => {
    Axios.put(`http://localhost:5000/updatelist`, {
      itemDisplayName: itemList
    })
    .then(res => {
      console.log(res);
      this.retrieveAll();
    })
    .catch(error => {
      this.setState({ error: "Server Down" });
    });

  }
 clearError=()=>{
  this.setState({error:""});
 }

  addTask = (newTask) => {
    console.log("addTask()");
    let error=false;
    for(let i=0;i<this.state.todoList.length;i++){
      if(newTask.listItem === this.state.todoList[i].itemDisplayName){
        this.setState({error:"This task is already added"});
        error=true;
      }
    }
    if(!error){
      this.setState({ itemList: newTask.listItem }, () => {
        this.inserListItem(this.state.itemList)
      });
      this.setState({error:""});
    }

  }
  checkItems = (index) => {
    this.todoListItems=this.state.todoList;
    this.todoListItems[index].status = 1;
    this.todoListItems[index].buttonColor = "afterclick";
    this.setState({todoList:this.todoListItems});
    this.updateListItem(this.state.todoList);

  }

  getcompletedItemCount = () => {

    let count = 0;
    for (let i = 0; i < this.state.todoList.length; i++) {
      if (this.state.todoList[i].status === 0) {
        count = count + 1;
      }
    }

    return count;
  }

  selectItems = (itemStatus) => {

    for (let i = 0; i < this.state.todoList.length; i++) {

      if (itemStatus === "All") {

        this.todoListItems[i].visibility = true;

      } else if (itemStatus === "Active") {

        if (this.state.todoList[i].status === 0) {
          this.todoListItems[i].visibility = true;
        } else {
          this.todoListItems[i].visibility = false;
        }

      } else if (itemStatus === "Completed") {

        if (this.state.todoList[i].status === 1) {
          this.todoListItems[i].visibility = true;
        } else {
          this.todoListItems[i].visibility = false;
        }
      }
    }
    this.setState({ todoList:  this.todoListItems });
    this.updateListItem(this.state.todoList);
  }

  retrieveAll = () => {
    console.log("retrieveAll()");
    Axios.get(`http://localhost:5000/list`)
      .then(res => {
        console.log(res.data.payload);
        
        this.setState({ todoList: res.data.payload});
        this.todoListItems=this.state.todoList;
       

      })
      .catch(error => {
        this.setState({ error: "Server Down" });
      });
  }

  componentDidMount = () => {
    this.retrieveAll()

  }

  render() {
    return (
      <div className="outerdiv">
        <div className="error"><label>{this.state.error}</label></div>
        <TaskReceive todoList={this.state.todoList} addTask={this.addTask} error={this.state.error} clearError={this.clearError}/>
        <TaskList todoList={this.state.todoList} checkItems={this.checkItems} />
        <TaskSelector todoList={this.state.todoList} selectItems={this.selectItems} completedItemCount={this.getcompletedItemCount()} />
      </div>
    );
  }
}

export default TaskApp;
