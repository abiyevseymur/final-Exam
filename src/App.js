import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from './actions'
import { setToggle } from './actions'


class App extends Component {
  state = {
    task: ""
  }

  onTextChange = (e) => {
    this.setState({ task: e.target.value })
  }
  onSubmit = (e) => {
    this.props.addList(this.state.task)
    this.setState({ task: e.target.value = "" })
  }
  render() {

    return (<>
      <div className="ui form success">
        <div className="field">
          <label>Task Manager Application</label>
          <input onChange={this.onTextChange} value={this.state.task} />
        </div>
        <button className="ui submit button" onClick={this.onSubmit}>Add</button>
      </div>
      {this.props.lists.map(m =>
        <div className="checkbox" key={m.id}>
          <div className="ui checked checkbox">
            <input type="checkbox" checked={m.checked} onChange={() => this.props.setToggle(m.id)} />
            <label style={m.checked ? { textDecoration: "line-through" } : {}}>{m.lists}</label></div></div>)}
    </>
    );
  }
}
function mapStateToProps(store) {


  return ({
    lists: store.lists
  })
}
export default connect(mapStateToProps, { addList, setToggle })(App);