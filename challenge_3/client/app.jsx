import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currRound: 1,
      thisMove: [],
      nextMove: [],
      moveAfterNext: [],
      numPins: '',
      message: ''
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <PinSelector />
        <Scorecard />
        <MessageBoard />
      </div>
    )
  }
}

export default App;