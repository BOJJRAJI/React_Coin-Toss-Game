import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeStateValue = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, url} = this.state
    console.log(heads, tails)
    const total = heads + tails
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="image" src={url} alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.changeStateValue}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
