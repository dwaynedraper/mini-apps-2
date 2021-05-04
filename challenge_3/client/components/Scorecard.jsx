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
            <td id="score-1-1"></td>
            <td id="score-1-2"></td>
            <td id="score-2-1"></td>
            <td id="score-2-2"></td>
            <td id="score-3-1"></td>
            <td id="score-3-2"></td>
            <td id="score-4-1"></td>
            <td id="score-4-2"></td>
            <td id="score-5-1"></td>
            <td id="score-5-2"></td>
            <td id="score-6-1"></td>
            <td id="score-6-2"></td>
            <td id="score-7-1"></td>
            <td id="score-7-2"></td>
            <td id="score-8-1"></td>
            <td id="score-8-2"></td>
            <td id="score-9-1"></td>
            <td id="score-9-2"></td>
            <td id="score-10-1"></td>
            <td id="score-10-2"></td>
            <td id="score-10-3"></td>
          </tr>
          <tr>
            <td>Score</td>
            <td id="round-1"colspan="2"></td>
            <td id="round-2"colspan="2"></td>
            <td id="round-3"colspan="2"></td>
            <td id="round-4"colspan="2"></td>
            <td id="round-5"colspan="2"></td>
            <td id="round-6"colspan="2"></td>
            <td id="round-7"colspan="2"></td>
            <td id="round-8"colspan="2"></td>
            <td id="round-9"colspan="2"></td>
            <td id="round-10"colspan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Scorecard;