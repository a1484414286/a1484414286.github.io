import React, { Component } from 'react'
import '../css/ProjectSection.css'
import CardItem from './CardItem';
// import ProgressBar from './ProgressBar';
import { Grid } from '@mui/material';

export default class ProjectsSection extends Component {
  // constructor(props)
  // {
  //   super(props);
  //   this.state = {
  //     progress : 33,
  //   };
  // }
  
  render() {
    const texts = {
      "Pocket Monster Pokedex" : "an app that contains ",
      'Friendly' : "an app that helps volunteers pair up with elders",
    }


    const images = require.context('../imgs')
    const imagePaths = images.keys();
    const imageModules = imagePaths.map(images);
    
    // const calculateProgress = (leaving) =>
    // { 
    //   return  leaving === 0 ? 33 : ((leaving+1) * 33);
    // }

    // const handlePrevClick = (leaving) => 
    // {
    //   this.setState({progress : calculateProgress(leaving)});
    // }
    
    // const handleNextClick = (leaving) =>
    // {
    //   this.setState({progress : calculateProgress(leaving)});
    // }

    return (
      <div>

        <h3>
          Projects
        </h3>
        <div>

            <Grid container>
            {Object.entries(texts).map(([key, value],index) => {
              return (
                  <CardItem text={key} hidden={value} img={imageModules[index]}></CardItem>
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