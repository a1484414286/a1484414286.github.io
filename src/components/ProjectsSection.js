import React, { Component } from 'react'
import '../css/ProjectSection.css'
import CardItem from './CardItem';
// import ProgressBar from './ProgressBar';
import { Stack } from '@mui/material';

export default class ProjectsSection extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      progress : 33,
    };
  }
  
  render() {
    const texts = {
        "pokedex" : "this is a xxx app"
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
        <div className='projects-container'>

          <div className='carousel-wrapper'>
            <Stack>
            {imageModules.map((img) => {
              const name = img.split('/')[3].split('.')[0];
              return (
                <Stack key={img}>
                  <CardItem text={name} hidden= {texts[name]}img={img}></CardItem>
                </Stack>
              );
            })}
            </Stack>
            <div className='progress-bar-container'>
              {/* <ProgressBar progressValue = {this.state.progress}></ProgressBar> */}
            </div>
            </div>
          </div>
      </div>
    
    )
 
  }
}