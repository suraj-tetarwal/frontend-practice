import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: true,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    return (
      <div className="main-container">
        <div
          className={
            isLightMode ? 'card-container' : 'card-container dark-card'
          }
        >
          <h1 className={isLightMode ? 'text' : 'text dark-text'}>
            Click To Change Mode
          </h1>
          <button type="button" className="button" onClick={this.onChangeTheme}>
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
