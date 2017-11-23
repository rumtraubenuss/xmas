import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDay: 8,
      showContent: false,
    };
  }

  imageOnLoad = ev => {
    console.log(ev.target.height);
  }

  handleDayClick = ev => {
    this.setState({ showContent: true });
  }

  handleContentClick = ev => {
    this.setState({ showContent: false });
  }

  render() {
    const { currentDay, showContent } = this.state;
    const contentActiveClass = showContent ? " content__container--active" : "";

    return (
      <div className="main__container">
        <div className="day__container">
          {Array(24).fill().map((_, n) => {
            const activeClass = n < currentDay ? ' day__item--active' : '';
            return (
              <div
                onClick={this.handleDayClick}
                className={`day__item${activeClass}`}
                key={n}
              >
                <span>{n + 1}</span>
              </div>
            );
          })}
        </div>
        <div
          onClick={this.handleContentClick}
          className={`content__container${contentActiveClass}`}
        >
          <img
            className="content__image"
            alt=""
            src={`${process.env.PUBLIC_URL}/content_01.jpg`}
          />
        </div>
      </div>
    );
  }
}

export default App;
