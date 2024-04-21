import Navbar from './Navbar'
import '../css/LandingPage.css'
import {motion} from "framer-motion";
import {IconButton, Grid} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

export default function LandingPage() {
  const lineVariants = {
    hidden: { opacity: 0, z: -1 },
    visible: { opacity: 1, x: 0, transition: { duration: 3.0 } },
  };


  const color =
  {
    color : "#FF8500",
    "display" : "flex",
    "fontSize" : "2em",
    "justify-content" : "center",
    "align-items" : "center",
    "width" : "100%",
    "margin" : 0,
  }
  
  return (
    <div className="body">
      <div className='triangle triangle-left'></div>
      <div className='triangle triangle-right'></div>
      <div className='button-stack-left'>
            <Grid container spacing={5} >
            <Grid item xs={1}>
              <IconButton aria-label='github-button'>
                <GitHubIcon fontSize='large'/>
              </IconButton>
            </Grid>
          <Grid item xs={1}>
              <IconButton aria-label='linkedin-button'>
                <LinkedInIcon fontSize='large'/>
              </IconButton>
            </Grid>
          </Grid>
      </div>
        <div className='center-container'>
          <div className='animated'>
            <motion.div className='center-text' initial="hidden" animate="visible" variants={lineVariants}>
              <h4><span style= {color}>Hi there,</span></h4>
              <h2><span style= {color}>I'm Liang Liu, a Software developer from Florida </span></h2>
            </motion.div>
            <div className="about-me">
              <button className="learn-more">
                <span aria-hidden="true" class="circle">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </div>

      <div className='button-container'>
        <div className='button-stack'>
          <Navbar></Navbar>
        </div>
      </div>


      <div className='arrow-container'>
        <span className='projects'>projects</span>

        <div className='arrow-box' >
          <div class="down-arrow">
              <i className='arrow-head'></i>
          </div>
        </div>
      </div>

    
    </div>
  )
}
