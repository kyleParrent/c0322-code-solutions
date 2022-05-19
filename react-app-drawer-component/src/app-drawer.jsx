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
    let page;
    if (click) {
      page = (
        <div onClick={this.handleClick} className='overlay'>
            <div className='side-bar'>
              <h2>Menu</h2>
              <div>About</div>
              <div>Get Started</div>
              <div>Sign In</div>
            </div>
          </div>
      );
    } else {
      page = (
          <div onClick={this.handleClick}>
          <i className='fa-solid fa-bars'></i>
          </div>
      );
    }
    return (
      page
    );
  }
}
