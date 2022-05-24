import React from 'react';

export default class AppDrawer extends React.Component {
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
    let sideBar;
    let overlay;
    if (click) {
      sideBar = 'side-bar open';
      overlay = 'overlay show';
    } else {
      sideBar = 'side-bar';
      overlay = 'overlay';
    }
    const page = (
      <div>
        <div onClick={this.handleClick}>
          <i className='fa-solid fa-bars'></i>
        </div>
        <div onClick={this.handleClick} className= {overlay}>
        </div>
        <div className= {sideBar}>
          <h2>Menu</h2>
          <div>About</div>
          <div>Get Started</div>
          <div>Sign In</div>
        </div>
      </div>
    );
    return (
      page
    );
  }
}
