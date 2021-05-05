import React from 'react';

const Scorecard = (props) => {
  return (
    <div className="App">
      <br/>
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <td></td>
            <td colSpan="2">1</td>
            <td colSpan="2">2</td>
            <td colSpan="2">3</td>
            <td colSpan="2">4</td>
            <td colSpan="2">5</td>
            <td colSpan="2">6</td>
            <td colSpan="2">7</td>
            <td colSpan="2">8</td>
            <td colSpan="2">9</td>
            <td colSpan="3">10</td>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td className="override">Player One</td>
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
            <td id="frame-1"colSpan="2"></td>
            <td id="frame-2"colSpan="2"></td>
            <td id="frame-3"colSpan="2"></td>
            <td id="frame-4"colSpan="2"></td>
            <td id="frame-5"colSpan="2"></td>
            <td id="frame-6"colSpan="2"></td>
            <td id="frame-7"colSpan="2"></td>
            <td id="frame-8"colSpan="2"></td>
            <td id="frame-9"colSpan="2"></td>
            <td id="frame-10"colSpan="3"></td>
          </tr>
        </tbody>
      </table>
      <br/>
      <h1>Total:</h1>
      <h1 id="total"></h1>
      <h1>{props.message}</h1>
    </div>
  )
}

export default Scorecard;