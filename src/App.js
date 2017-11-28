import React, { Component } from 'react';

import './App.css';
import landscapeImage from './landscape.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDay: new Date().getDate(),
      showContent: false,
      showImage: false,
      ts: undefined,
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
    const showImage = false;
    const ts = new Date().getTime();
    this.setState({ showContent, showImage, contentIndex, ts });
  }

  handleContentClick = ev => {
    this.setState({ showContent: false, showImage: false });
  }

  handleImageOnLoad = ev => {
    this.setState({ showImage: true });
  }

  render() {
    const { currentDay, showContent, showImage, contentIndex, ts } = this.state;
    const contentActiveClass = showContent ? " content__container--active" : "";
    const imageActiveClass = showImage ? " content__image--active" : "";

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
            onLoad={this.handleImageOnLoad}
            className={`content__image${imageActiveClass}`}
            alt=""
            src={`${process.env.PUBLIC_URL}/content_${contentIndex}.jpg?ts=${ts}`}
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
