import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  handleEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  handleEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-container">
        <div className="cards-container">
          <h1 className="heading-text">
            Bob ate
            <span className="fruit-counter"> {mangoCount} </span>
            mangoes
            <span className="fruit-counter"> {bananaCount} </span>
            bananas
            <div className="fruit-card-container">
              <div className="fruit-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="fruit-image"
                />
                <button
                  type="button"
                  className="eat-fruit-button"
                  onClick={this.handleEatMango}
                >
                  Eat Mango
                </button>
              </div>
              <div className="fruit-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="fruit-image"
                />
                <button
                  type="button"
                  className="eat-fruit-button"
                  onClick={this.handleEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
