import React, { Component } from 'react';
import todostyle from './style/todo.css'

class TaskReceive extends Component {

  constructor(props){
    super(props);
    this.state={listItem:"",
                defaultvalue:"What needs to be done?"
                }
  }
  onFocus=(e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
        e.target.value="";
        this.setState({defaultvalue:""})
    }else{
        console.log(e.target.value);
        this.setState({defaultvalue: "What needs to be done?"})
    }
    this.props.clearError();
    this.setState({listItem:""});
  }
  onBlur=(e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
        e.target.value="";
        this.setState({defaultvalue:""})
    }else{
        console.log(e.target.value);
        this.setState({defaultvalue: "What needs to be done?"})
    }
    this.props.clearError();
    this.setState({listItem:""});
  }
  handleChange=(e)=>{
    this.setState({defaultvalue:""});
    this.setState({listItem:""});
    this.setState({[e.target.name]:e.target.value});
    this.props.clearError();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask({listItem:this.state.listItem});
    this.setState({defaultvalue:""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="taskreceivediv"><input className="inputstyle" defaultValue={this.state.defaultvalue} onChange={this.handleChange}  onBlur={this.onBlur} onFocus={this.onFocus} name="listItem" value={this.state.listItem}></input></div>
         
      </form>   
    );
  }
}

export default TaskReceive;