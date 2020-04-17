import React, { Component } from 'react'
export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClick = (event) => {
    let state_counter = this.state.counter
    state_counter = state_counter + 1
    this.setState({
      counter: state_counter
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}
export default Counter