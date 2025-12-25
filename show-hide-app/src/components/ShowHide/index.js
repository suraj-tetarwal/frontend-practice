import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({
      showFirstName: !prevState.showFirstName,
    }))
  }

  onShowLastName = () => {
    this.setState(prevState => ({
      showLastName: !prevState.showLastName,
    }))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="card">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName ? <p className="name-card">Joe</p> : ''}
          </div>
          <div className="card">
            <button
              className="button"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
