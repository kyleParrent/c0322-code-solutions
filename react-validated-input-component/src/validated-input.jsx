import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      status: false,
      message: 'A password is required.'
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    const pass = this.state.password;
    if (pass.length < 8) {
      this.setState({ status: false, message: 'Your password is too short.' });
    } else {
      this.setState({ status: true, message: '' });
    }
  }

  render() {
    const match = this.state.status;
    const message = this.state.message;
    let passwordPage;
    if (!match) {
      passwordPage = (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Password:
            </label>
          </div>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-xmark"></i>
          <div className='message'>{message}</div>
        </form>
      );
    } else {
      passwordPage = (
        <form>
          <div>
            <label>
              Password:
            </label>
          </div>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <i className="fa-solid fa-check"></i>
          <div className='message'>{message}</div>
        </form>
      );
    }
    return (
      passwordPage
    );
  }
}
