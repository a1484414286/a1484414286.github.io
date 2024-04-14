import React, { Component } from 'react'
import CardItem from './CardItem';
import { Grid, Box} from '@mui/material';
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
        <Box>
          <Grid container>          
            {projectItems.map((img) =>(
              <Grid item xs={2} md={4}>
                <CardItem key = {img} img = {img}>
                </CardItem>
              </Grid>
              ))}
          </Grid>
        </Box>

      </div>
      
    )
  }
}
