import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    }
  }

  render() {
    const click = this.state.isClicked;
    let theSwitch;
    if (click) {
      theSwitch = (
        <div className='full-box'>
          <div className='switch-box green'>
            <div onClick={this.handleClick} className='on white'></div>
          </div>
          <div className='text-box'><div>ON</div></div>
        </div>
      );
    } else {
      theSwitch = (
        <div className='full-box'>
          <div className='switch-box gray'>
            <div onClick={this.handleClick} className='off white'></div>
          </div>
          <div className='text-box'><div>OFF</div></div>
        </div>
      );
    }
    return (
      theSwitch
    );
  }
}
