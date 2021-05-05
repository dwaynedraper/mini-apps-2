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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTurn = this.updateTurn.bind(this);
    this.updateFrame = this.updateFrame.bind(this);
    this.strike = this.strike.bind(this);
    this.spare = this.spare.bind(this);
    this.turnOne = this.turnOne.bind(this);
    this.turnTwo = this.turnTwo.bind(this);
    this.earlyFrames = this.earlyFrames.bind(this);
    this.finalFrame = this.finalFrame.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }
  componentDidMount() {

  }

  updateTurn() {
    console.log('updateTurn')
    let el = document.getElementById(`turn-${this.state.currFrame}-${this.state.currTurn}`);
    el.innerText = this.state.numPins;
  }

  updateFrame(frame) {
    console.log('updateFrame')
    // passing in a frame, because for strikes and spares, I can't just capture currFrame
    //TODO: Come back and make this accept variable frame after implementing scorecard basics
    let el = document.getElementById(`frame-${this.state.currFrame}`);
    console.log('innerText: ', el.innerText);
    !el.innerText ? el.innerText = this.state.numPins :
    el.innerText = parseInt(el.innerText) + parseInt(this.state.numPins);
    // el.innerText = parseInt(el.innerText) + parseInt(this.state.numPins.toInteger);
  }

  updateTotal() {
    let el = document.getElementById(`total`);
    !el.innerText ? el.innerText = this.state.numPins :
    el.innerText = parseInt(el.innerText) + parseInt(this.state.numPins);
  }
  
  strike() {
    console.log('strike')
    let el = document.getElementById(`turn-${this.state.currFrame}-${this.state.currTurn}`);
    el.innerText = 'X';
  }
  
  spare() {
    console.log('spare')
    let el = document.getElementById(`turn-${this.state.currFrame}-${this.state.currTurn}`);
    el.innerText = '/';
  }
  
  turnOne() {
    console.log('turnOne')
    let pins = parseInt(this.state.numPins);
    if (pins === 10) {
      this.strike();
      this.updateFrame();
      this.updateTotal();
      this.setState((state) => {
        return {currFrame: state.currFrame + 1};
      })
      this.setState()
    } else {
      this.updateTurn();
      this.updateFrame();
      this.updateTotal();
      this.setState((state) => {
        return {currTurn: state.currTurn + 1}
      })
    }
  }
  
  turnTwo() {
    console.log('turnTwo')
    let pins = parseInt(this.state.numPins);
    let firstTurn = parseInt(document.getElementById(`turn-${this.state.currFrame}-1`).innerText);
    if (pins + firstTurn === 10) {
      this.spare();
      this.updateFrame();
      this.updateTotal();
      this.setState((state) => {
        return {currFrame: state.currFrame + 1}
      })
      this.setState({
        currTurn: 1
      })
    } else {
      this.updateTurn();
      this.updateFrame();
      this.updateTotal();
      this.setState((state) => {
        return {currFrame: state.currFrame + 1}
      })
      this.setState({
        currTurn: 1
      })
    }
  }
  
  earlyFrames() {
    console.log('earlyFrames')
    if (this.state.currTurn === 1) {
      this.turnOne();
    } else if (this.state.currTurn === 2) {
      this.turnTwo();
    } else {
      console.error('Turn toggling system error. Please see App.jsx')
    }
  }

  finalFrame() {
    console.log('finalFrame');
  }

  handleChange(e) {
    console.log('handleChange')
    this.setState({
      numPins: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.currFrame <= 9) {
      this.earlyFrames();
    } else if (this.state.currFrame === 10) {
      console.log('finalFrame');
      this.finalFrame();
    } else {
      console.log('Game over')
      this.setState({
        message: 'Game over! Congratulations on your awesome score!!'
      })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number of pins hit:
            <input type="text" value={this.state.numPins} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Scorecard />
        {/* <MessageBoard /> */}
      </div>
    )
  }
}

export default App;