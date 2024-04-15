import React, { Component } from 'react'
import '../css/ProgressBar.css'

import CardItem from './CardItem';
import Carousel from 'react-material-ui-carousel'
import ProgressBar from './ProgressBar';

export default class ProjectsSection extends Component {
  render() {
    const projectItems = [
        ["🍅"],
        ["🍊"],
        ["🍋"],
        ["🍐"],
        ["🍏"],
        ["🫐"],
        ["🍆"],
        ["🍇"]
    ]

    return (
      <div>
        <h3>
          Projects
        </h3>
        <ProgressBar></ProgressBar>
        <Carousel>
          {projectItems.map((img) =>(<CardItem key = {img} img = {img}></CardItem>))}
        </Carousel>
      </div>
      
    )
  }
}
