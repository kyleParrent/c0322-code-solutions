import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (index === this.state.openIndex) {
      this.setState({ openIndex: null });
    } else {
      this.setState({ openIndex: index });
    }
  }

  render() {
    let theOpen = this.state.openIndex;
    theOpen = parseInt(theOpen);
    const list = (
      <ul>
        {this.props.topics.map((topics, index) => {
          let infoName;
          if (theOpen === index) {
            infoName = 'info';
          } else {
            infoName = 'info hidden';
          }
          return (
          <li className='list-item' key={index}>
            <div onClick={this.handleClick} data-index={index} className='header'>{topics.topic}</div>
            <div className= {infoName}>{topics.content}</div>
          </li>
          );
        })}
      </ul>
    );
    return (
      list
    );
  }
}
