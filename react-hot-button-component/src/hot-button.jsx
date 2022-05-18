import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    const counter = this.state.numberOfClicks;
    let button;
    if (counter < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    }
    if (counter >= 3) {
      button = <button onClick={this.handleClick} className='purple white-t'>Hot Button</button>;
    }
    if (counter >= 6) {
      button = <button onClick={this.handleClick} className='light-purple white-t'>Hot Button</button>;
    }
    if (counter >= 9) {
      button = <button onClick={this.handleClick} className='red white-t'>Hot Button</button>;
    }
    if (counter >= 12) {
      button = <button onClick={this.handleClick} className='orange black-t'>Hot Button</button>;
    }
    if (counter >= 15) {
      button = <button onClick={this.handleClick} className='yellow black-t'>Hot Button</button>;
    }
    if (counter >= 18) {
      button = <button onClick={this.handleClick} className='white black-t'>Hot Button</button>;
    }
    return (
      button
    );
  }
}
