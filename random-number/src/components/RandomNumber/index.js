import {Component} from 'react'

import './index.css'

class RandomNumber extends Component {
  state = {
    number: 0,
  }

  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="card-heading">Random Number</h1>
          <p className="card-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.generateRandomNumber}
            className="card-button"
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumber
