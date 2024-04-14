import React, { Component } from 'react'
import CardItem from './CardItem';
import { CircularProgress } from '@mui/material';

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

        <h3>
          Projects
        </h3>
      <div>
        <CircularProgress></CircularProgress>
        {projectItems.map((img) =>
          (<CardItem key = {img} img = {img}></CardItem>))}
        </div>
      </div>
      
    )
  }
}
