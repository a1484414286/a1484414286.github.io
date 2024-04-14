import React, { Component } from 'react'
import CardItem from './CardItem';

export default class ProjectsSection extends Component {
    render() {
    const projectItems = [
        ["🍅", 340, 10],
        ["🍊", 20, 40],
        ["🍋", 60, 90],
        ["🍐", 80, 120],
        ["🍏", 100, 140],
        ["🫐", 205, 245],
        ["🍆", 260, 290],
        ["🍇", 290, 320]
        ];
          
    return (
      <div>
      {projectItems.map(([img,hueA,hueB]) =>
        (
            <CardItem key = {img} img = {img} hueA = {hueA} hueB = {hueB}></CardItem>
        ))}
      </div>
    )
  }
}
