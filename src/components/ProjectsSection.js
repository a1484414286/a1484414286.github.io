import React, { Component } from 'react'
import '../css/ProjectSection.css'
import CardItem from './CardItem';
// import ProgressBar from './ProgressBar';
import { Grid } from '@mui/material';

export default class ProjectsSection extends Component {
  render() {
    const texts = {
      "Pocket Monster Pokedex" : "an app that contains ",
      "Friendly" : "an app that helps volunteers pair up with elders",
    }

    const url = 
    [
      "https://github.com/a1484414286/Pokedex",
      "https://github.com/NekruzAsh/Google-AI-Hack"
    ]


    const images = require.context('../imgs')
    const imagePaths = images.keys();
    const imageModules = imagePaths.map(images);

    return (
      <div>

        <h3>
          Projects
        </h3>
        <div>

            <Grid container>
              {Object.entries(texts).map(([key, value],index) => {
                return (
                    <CardItem text={key} hidden={value} img={imageModules[index]} link={url[index]}></CardItem>
                );
              })}
            </Grid>
            <div className='progress-bar-container'>
              {/* <ProgressBar progressValue = {this.state.progress}></ProgressBar> */}
            </div>
          </div>
      </div>
    
    )
 
  }
}