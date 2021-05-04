import React from 'react';
import Scorecard from './components/Scorecard';

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
  handleScoreInput() {
    
  }
  render() {
    return (
      <div>
        
        <Scorecard />
        {/* <MessageBoard /> */}
      </div>
    )
  }
}

export default App;