import React, { Component } from 'react';

import './App.css';
import landscapeImage from './landscape.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDay: new Date().getDate(),
      showContent: false,
      contentIndex: undefined,
    };
    window.setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    const currentDay = new Date().getDate();
    this.setState({ currentDay });
  }

  handleDayClick = contentIndex => {
    const showContent = contentIndex <= this.state.currentDay - 1 ? true : false;
    this.setState({ showContent, contentIndex });
  }

  handleContentClick = ev => {
    this.setState({ showContent: false });
  }

  render() {
    const { currentDay, showContent, contentIndex } = this.state;
    const contentActiveClass = showContent ? " content__container--active" : "";

    return (
      <div className="main__container">
        <div className="day__container">
          {Array(24).fill().map((_, n) => {
            const activeClass = n < currentDay ? ' day__item--active' : '';
            return (
              <div
                onClick={() => this.handleDayClick(n)}
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
            src={`${process.env.PUBLIC_URL}/content_${contentIndex}.jpg`}
          />
        </div>
        <div className="landscape__container">
          <img src={landscapeImage} className="landscape__image" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
