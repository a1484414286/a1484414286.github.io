import Navbar from './Navbar'
import '../css/LandingPage.css'
import {motion} from "framer-motion";
import {IconButton, Grid} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import AboutMeModal from './AboutMeModal';

export default function LandingPage() {
  const lineVariants = {
    hidden: { opacity: 0, z: -1 },
    visible: { opacity: 1, x: 0, transition: { duration: 3.0 } },
  };

  const color =
  {
    color : "#FF8500",
    "display" : "flex",
    "fontSize" : "1.5em",
    "justify-content" : "space-evenly",
    "align-items" : "center",
    "width" : "100%",
    "margin" : 0,
    "text-align" : "center",
  }
  
  return (
    <div className="body" id='home'>
      <div className='triangle triangle-left'></div>
        <div className='button-stack'>
          <Navbar></Navbar>
        </div>
        <div className='center-container'>
          <div className='animated'>
            <motion.div className='center-text' initial="hidden" animate="visible" variants={lineVariants}>
              <h4><span style= {color}>Hi there,</span></h4>
              <h2><span style= {color}>I'm Liang Liu, a Software developer from Florida </span></h2>
              <AboutMeModal></AboutMeModal>
            </motion.div>
            <div className='icon-container' >
                  <Grid container spacing={1} >
                    <Grid item>
                      <IconButton 
                      aria-label='github-button'
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/a1484414286">
                        <GitHubIcon fontSize='large' />
                      </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label='linkedin-button'>
                          <LinkedInIcon fontSize='large'/>
                        </IconButton>
                      </Grid>
                  </Grid>
            </div> 
          </div>
        </div>




    
    </div>
  )
}
