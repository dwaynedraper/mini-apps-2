import React from 'react';
import Scorecard from './components/Scorecard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currFrame: 1,
      currTurn: 1,
      thisMove: [],
      nextMove: [],
      moveAfterNext: [],
      numPins: '',
      message: ''
    }
  }
  componentDidMount() {

  }

  updateTurn() {
    let el = document.getElementById(`turn-${this.state.currFrame}-${this.state.currTurn}`);
    el.innerTexts = this.state.numPins;
  }

  updateFrame(frame) {
    // passing in a frame, because for strikes and spares, I can't just capture currFrame
    let el = document.getElementById(`frame-${frame}`);

    el.innerText = 
  }
  
  strike() {
    let el = document.getElementById(`turn-${this.state.currFrame}-${this.state.currTurn}`);
    el.innerTexts = this.state.numPins;
  }
  
  spare() {
    
  }
  
  turnOne() {
    let pins = this.state.numPins;
    if (pins === 10) {
      this.strike();
      this.setState((state) => {
        return {currFrame: state.currFrame + 1};
      })
    } else {
      this.updateTurn();
      this.setState((state) => {
        return {currTurn: state.currTurn + 1}
      })
    }
  }
  
  turnTwo() {
    let pins = this.state.numPins;
    let firstTurn = document.getElementById(`turn-${this.state.currFrame}-1`).innerText;
    if (pins + firstTurn === 10) {
      this.spare();
    }
  }
  
  earlyFrames(e) {
    if (this.state.currTurn === 1) {
      this.turnOne();
    } else if (currTurn === 2) {
      this.turnTwo();
    } else {
      console.error('Turn toggling system error. Please see App.jsx')
    }
  }

  finalFrame() {
    console.log('finalFrame');
  }

  handleSubmit(e) {
    if (this.state.currFrame <= 9) {
      this.earlyFrames(e);
    } else if (this.state.currFrame === 10) {
      this.finalFrame(e);
    } else (
      this.setState({
        message: 'Game over! Congratulations on your awesome score!!'
      })
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>
        <Scorecard />
        {/* <MessageBoard /> */}
      </div>
    )
  }
}

export default App;