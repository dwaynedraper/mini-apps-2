import e from 'express';
import React from 'react';
import { render } from 'react-dom';

class PinSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    // e.preventDefault();
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  render() {
    return (
      <div className="pin-selector">
        <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
          <thead>
            <tr>
              <td colspan="3">Pins knocked down</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">GutterBall</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}