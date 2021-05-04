import React from 'react';
import LineChart from './Line.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keys: [],
      vals: []
    }
  }

  componentDidMount() {
    axios.get('/data')
    .then((res) => {
      this.setState({
        keys: Object.keys(res.data.bpi),
        vals: Object.values(res.data.bpi)
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Bitcoin Prices - last 2 weeks</h1>
        <LineChart keys={this.state.keys} vals={this.state.vals} />
        <a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
      </div>
    )
  }
}