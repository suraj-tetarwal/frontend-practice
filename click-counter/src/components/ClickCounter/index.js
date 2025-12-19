import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  handleIncreaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading-text">
            The Button has been clicked
            <span className="count-text"> {count}</span> times
          </h1>
          <p className="description-text">
            Click the button to increase the count!
          </p>
          <button
            type="button"
            className="button"
            onClick={this.handleIncreaseCount}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
