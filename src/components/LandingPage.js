import Navbar from './Navbar'
import '../css/LandingPage.css'
import {motion} from "framer-motion";
import React from 'react';
import {IconButton, Grid} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AboutMe from './AboutMe'

export default function LandingPage() {
  const lineVariants = {
    hidden: { opacity: 0, z: -1 },
    visible: { opacity: 1, x: 0, transition: { duration: 3.0 } },
  };

  return (
    <div className="body">
      <div className='triangle triangle-left'></div>
      <div className='triangle triangle-right'></div>
        <Navbar></Navbar>
        <div className='animated'>
          <motion.div initial="hidden" animate="visible" variants={lineVariants}>
            <h4><span style={{color : '#FBEAEB'}}>Hi, there</span></h4>
            <h2><span style={{color : '#FBEAEB'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm Liang Liu, a</span><span style={{color:"#2F3C7E"}}>Software developer from Florida </span></h2>
          </motion.div>
          <div className="about-me">
            <AboutMe></AboutMe>
          </div>
        </div>
      
      <div className='button-stack'>
        <Grid container spacing={1} >
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
      <span className='projects'>projects</span>
      <div className='arrow-container'>
        <div class="down-arrow">
            <i className='arrow-head'></i>
        </div>
      </div>
    </div>
  )
}
