import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  handleAccelerate = () => {
    const {speed} = this.state
    if (speed >= 200) {
      return
    }
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  handleBrake = () => {
    const {speed} = this.state
    if (speed <= 0) {
      return
    }

    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="description-text">
          Min Limit is 0mph, Max limit is 200mph
        </p>
        <div className="button-container">
          <button
            type="button"
            className="accelerate-button"
            onClick={this.handleAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-button"
            onClick={this.handleBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
