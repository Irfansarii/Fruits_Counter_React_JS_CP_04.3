import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}
  onIncrementMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }
  onIncrementBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }
  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1>
            Bob ate <span className="mango">{mango}</span> mangoes
            <span className="banana">{banana}</span> bananas
          </h1>
          <div className="card-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="button" onClick={this.onIncrementMango}>
                Eat Mango
              </button>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
                alt="banana"
              />
              <button className="button" onClick={this.onIncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
