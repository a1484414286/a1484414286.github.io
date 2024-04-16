import React, { Component } from 'react'
import '../css/ProjectSection.css'
import Grid from '@mui/material/Grid'
import CardItem from './CardItem';
import Carousel from 'react-material-ui-carousel'
import ProgressBar from './ProgressBar';

export default class ProjectsSection extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      progress : 33,
    };
  }
  
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

    
    const groupedItems = [];
    for (let i = 0; i < projectItems.length; i += 3) {
      groupedItems.push(projectItems.slice(i, i + 3));
    }

    const calculateProgress = (leaving) =>
    { 
      return  leaving === 0 ? 33 : ((leaving+1) * 33);
    }

    const handlePrevClick = (leaving, next) => 
    {
      this.setState({progress : calculateProgress(leaving)});
    }
    
    const handleNextClick = (leaving, next) =>
    {
      this.setState({progress : calculateProgress(leaving)});
    }

    return (
      <div>
        <h3>
          Projects
        </h3>
        <div className='projects-container'>

          <div className='carousel-wrapper'>
                <Carousel indicators = {false}
                stopAutoPlayOnHover={true} 
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                next={ handleNextClick }
                prev={ handlePrevClick}
                >
                {groupedItems.map((group) =>(
                    <Grid container key={group[0]}>
                      {group.map(img => (
                        <Grid item xs={4} lg={4} md={4} key={img}>
                          <CardItem img={img}></CardItem>
                        </Grid>
                      ))}
                    </Grid>
                ))}
                </Carousel>
                <div className='progress-bar-container'>
                  <ProgressBar progressValue = {this.state.progress}></ProgressBar>
                </div>

            </div>
          </div>
      </div>
    
    )
 
  }
}