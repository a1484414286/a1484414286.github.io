import React, { Component } from 'react'
import '../css/ProjectSection.css'
import Grid from '@mui/material/Grid'
import CardItem from './CardItem';
import Carousel from 'react-material-ui-carousel'
import ProgressBar from './ProgressBar';
import { Button, IconButton } from '@mui/material';

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
    const buttonStyle =
    {
      fontSize : '3em',
      height : '40px',
      width : '40px',
    }
    const groupedItems = [];
    for (let i = 0; i < projectItems.length; i += 3) {
      groupedItems.push(projectItems.slice(i, i + 3));
    }
    return (
      <div>
        <h3>
          Projects
        </h3>
        <ProgressBar></ProgressBar>

        <div className='carousel-wrapper'>

            <div className="carousel-container">
              <Carousel indicators = {false}
              stopAutoPlayOnHover={true} autoPlay={true}
              navButtonsAlwaysVisible={true}
              >
              {groupedItems.map((group) =>(
                  <Grid container key={group[0]}>
                    {group.map(img => (
                      <Grid item xs={4} lg={4} md={4}key={img}>
                        <CardItem img={img}></CardItem>
                      </Grid>
                    ))}
                  </Grid>
              ))}
              </Carousel>
            </div>
        </div>
              
       </div>
    )
  }
}