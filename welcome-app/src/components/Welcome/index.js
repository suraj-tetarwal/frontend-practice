import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  handleButtonClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="main-container">
        <h1 className="welcome-text">Welcome</h1>
        <p className="welcome-message-text">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.handleButtonClick}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
