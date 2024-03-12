import React, { Component, ChangeEvent, TouchEvent } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import img from "../assets/WhatsApp Image 2024-02-07 at 3.23.png";
import { Box } from "@mui/material";

interface Slide {
  key: string;
  content: React.ReactNode;
  onClick: () => void;
}



export default class Example extends Component<{}, ExampleState> {
  state: ExampleState = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    enableSwipe: true,
    config: config.gentle,
  };

  slides: Slide[] = [
    {
      key: uuidv4(),
      content: <img src={img} alt="1" />,
      onClick: () => this.setState({ goToSlide: 0 }),
    },
    {
      key: uuidv4(),
      content: <img src="https://th.bing.com/th/id/OIP.BkSBgs32XX9jVb6d_FX_yAHaGJ?rs=1&pid=ImgDetMain" alt="2" />,
      onClick: () => this.setState({ goToSlide: 1 }),
    },
    {
      key: uuidv4(),
      content: <img src="https://th.bing.com/th/id/OIP.BkSBgs32XX9jVb6d_FX_yAHaGJ?rs=1&pid=ImgDetMain" alt="3" />,
      onClick: () => this.setState({ goToSlide: 2 }),
    },
    {
      key: uuidv4(),
      content: <img src="https://th.bing.com/th/id/OIP.BkSBgs32XX9jVb6d_FX_yAHaGJ?rs=1&pid=ImgDetMain" alt="4" />,
      onClick: () => this.setState({ goToSlide: 3 }),
    },
  ];

  onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    } as Pick<ExampleState, keyof ExampleState>);
  };

  handleTouchStart = (evt: TouchEvent) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = evt.touches[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  handleTouchMove = (evt: TouchEvent) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown! - xUp;
    let yDiff = this.state.yDown! - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null,
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null,
        });
      }
    }
  };

  render() {
    return (
    <Box maxWidth='xl' sx={{mt:'3vw',}}>
      <div
        style={{ width: "50vw", height: "30vw" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          animationConfig={this.state.config}
        />
      </div>
      </Box>
    );
  }
}
