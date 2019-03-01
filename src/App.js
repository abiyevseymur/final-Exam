import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from './actions'


class App extends Component {
  state = {
    task: ""
  }

  onTextChange=(e)=>{
    this.setState({task:e.target.value})

  }

  isChecked=(toggle)=>{
    if(toggle)
    
    return toggle
  }
  onSubmit=(e)=>{
    this.props.addList(this.state.task)
    this.setState({task:e.target.value = ""})

  }
  render() {
    return (
      <> <div class="ui form success">
        <div class="field">
          <label>Task Manager Application</label>
          <input  onChange={this.onTextChange} value={this.state.task}/>
        </div>
        <button class="ui submit button" onClick={this.onSubmit}>Add</button>
      </div> 

      
          {this.props.lists.map(m=><>
          <div className = "checkbox">
            <div class="ui checked checkbox">
          <input type="checkbox"  checked={this.isChecked()} onChange={(e)=> this.isChecked(e.target.value)}  />
          <label>{m}</label></div></div></>)}
        
      </>
    );
  }
}
function mapStateToProps(store) {
  return ({
    lists: store.lists
  })
}
export default connect(mapStateToProps, { addList })(App);