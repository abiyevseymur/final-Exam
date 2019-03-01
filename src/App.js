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
  toggle=(e)=>{
    let toggle = e.target.value

  }
 
  render() {
    return (
      <> <div class="ui form success">
        <div class="field">
          <label>Task Manager Application</label>
          <input  onChange={this.onTextChange} value={this.state.task}/>
        </div>
        <button class="ui submit button" onClick={()=>this.props.addList(this.state.task)}>Add</button>
      </div> 

      <div class="ui checked checkbox">
            {this.props.lists.map(m=><><input type="checkbox"  checked="" onChange={this.toggle}  />
            <label>{m}</label></>)}
            
        </div>
      </>
    );
  }
}
function mapStateToProps(store) {
console.log(store)
  return ({
    lists: store.lists
  })
}
export default connect(mapStateToProps, { addList })(App);