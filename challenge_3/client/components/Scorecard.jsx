import React from 'react';

const Scorecard = (props) => {
  return (
    <div className="App">
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <td>Bowling Scorecard</td>
            <td colspan="2">1</td>
            <td colspan="2">2</td>
            <td colspan="2">3</td>
            <td colspan="2">4</td>
            <td colspan="2">5</td>
            <td colspan="2">6</td>
            <td colspan="2">7</td>
            <td colspan="2">8</td>
            <td colspan="2">9</td>
            <td colspan="3">10</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player One</td>
            <td id="turn-1-1"></td>
            <td id="turn-1-2"></td>
            <td id="turn-2-1"></td>
            <td id="turn-2-2"></td>
            <td id="turn-3-1"></td>
            <td id="turn-3-2"></td>
            <td id="turn-4-1"></td>
            <td id="turn-4-2"></td>
            <td id="turn-5-1"></td>
            <td id="turn-5-2"></td>
            <td id="turn-6-1"></td>
            <td id="turn-6-2"></td>
            <td id="turn-7-1"></td>
            <td id="turn-7-2"></td>
            <td id="turn-8-1"></td>
            <td id="turn-8-2"></td>
            <td id="turn-9-1"></td>
            <td id="turn-9-2"></td>
            <td id="turn-10-1"></td>
            <td id="turn-10-2"></td>
            <td id="turn-10-3"></td>
          </tr>
          <tr>
            <td>Score</td>
            <td id="frame-1"colspan="2"></td>
            <td id="frame-2"colspan="2"></td>
            <td id="frame-3"colspan="2"></td>
            <td id="frame-4"colspan="2"></td>
            <td id="frame-5"colspan="2"></td>
            <td id="frame-6"colspan="2"></td>
            <td id="frame-7"colspan="2"></td>
            <td id="frame-8"colspan="2"></td>
            <td id="frame-9"colspan="2"></td>
            <td id="frame-10"colspan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Scorecard;