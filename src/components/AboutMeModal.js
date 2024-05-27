import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import '../css/LandingPage.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    "opacity" : 1
  };
  

export default function AboutMeModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <div>    
        <div className='about-me-container'>
            <button className="learn-more" onClick={handleOpen}>
                <span aria-hidden="true" class="circle">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">About Me</span>
            </button>
        </div>

        <Modal
             aria-labelledby="transition-modal-title"
             aria-describedby="transition-modal-description"
             open={open}
             onClose={handleClose}
             closeAfterTransition
             slots={{ backdrop: Backdrop }}
             slotProps={{
               backdrop: {
                 timeout: 500,
               },
             }}>
            <Fade in={open}>
              <Box sx={style}>
                  <div className="X-button-container">
                    <button className="X-button">X</button>
                  </div>
                  <Typography id="transition-modal-title" variant="h6" component="h2">
                    About
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    I'm a Software Engineering student at Rochester Institute of Technology. I have a passion for technology and innovation, and I thrive on learning new skills and applying them to create unique and humorous application 
                  </Typography>

                 
              </Box>
            </Fade>
        </Modal>
    </div>
  )
}
