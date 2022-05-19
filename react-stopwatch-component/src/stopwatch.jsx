import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, currentSec: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
      this.timerId = setInterval(
        () => this.tick(),
        1000
      );
    } else if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({ currentSec: this.state.currentSec + 1 });
  }

  render() {
    const click = this.state.isClicked;
    let theWatch;
    if (click) {
      theWatch = (
        <div>
          <div className='circle'>
            <div className='font'>{this.state.currentSec}</div>
          </div>
          <div className='button-box font'><div><i onClick={this.handleClick} className='fas fa-pause'></i></div></div>
        </div>
      );
    } else {
      theWatch = (
        <div>
          <div className='circle'>
            <div className='font'>{this.state.currentSec}</div>
          </div>
          <div className='button-box font'><div><i onClick={this.handleClick} className='fas fa-play'></i></div></div>
        </div>
      );
    }
    return (
      theWatch
    );
  }
}
