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

      </div>
    )
  }
}