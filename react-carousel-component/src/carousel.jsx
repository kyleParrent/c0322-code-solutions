import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      intId: null
    };
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleClickArrowBack = this.handleClickArrowBack.bind(this);
    this.handleClickArrowFoward = this.handleClickArrowFoward.bind(this);
  }

  componentDidMount() {
    const intId = setInterval(() => {
      if (this.state.currentIndex < this.props.images.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }, 3000);
    this.setState({ intId: intId });
  }

  handleClickIcon(event) {
    const index = event.target.getAttribute('data-index');
    const parsedIndex = parseInt(index);
    this.setState({ currentIndex: parsedIndex });
    clearInterval(this.state.intId);
    const intId = setInterval(() => {
      if (this.state.currentIndex < this.props.images.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }, 3000);
    this.setState({ intId: intId });

  }

  handleClickArrowFoward(event) {
    if (this.state.currentIndex < this.props.images.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
    clearInterval(this.state.intId);
    const intId = setInterval(() => {
      if (this.state.currentIndex < this.props.images.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }, 3000);
    this.setState({ intId: intId });
  }

  handleClickArrowBack(event) {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else {
      this.setState({ currentIndex: this.props.images.length - 1 });
    }
    clearInterval(this.state.intId);
    const intId = setInterval(() => {
      if (this.state.currentIndex < this.props.images.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }, 3000);
    this.setState({ intId: intId });
  }

  render() {
    let theOpen = this.state.currentIndex;
    theOpen = parseInt(theOpen);
    const page = (
      <div className="container">
        <div className="row">
          <div className="col-fourth left">
            <i onClick={this.handleClickArrowBack} className="fas fa-angle-left arrow"></i>
          </div>
          <div className="col-half center">
            <img className="current-image" src={this.props.images[theOpen].image} alt="the-bulbs"/>
          </div>
          <div className="col-fourth right">
            <i onClick={this.handleClickArrowFoward} className="fas fa-angle-right arrow"></i>
          </div>
        </div>
        <div className="row center">
          <div className="col-twelve dots">
            {this.props.images.map((images, index) => {
              let iconType;
              if (theOpen === index) {
                iconType = 'fas fa-circle icon';
              } else {
                iconType = 'far fa-circle icon';
              }
              return (
                <i onClick={this.handleClickIcon} data-index={index} key={index} className={iconType}></i>
              );
            }
            )
          }
          </div>
        </div>
      </div>);
    return (
      page
    );
  }
}
