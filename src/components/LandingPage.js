import React from 'react'
import Navbar from './Navbar'
import '../css/LandingPage.css'
import {motion} from "framer-motion";



export default function LandingPage() {
  const lineVariants = {
    hidden: { opacity: 0, z: -1 },
    visible: { opacity: 1, x: 0, transition: { duration: 3.0 } },
  };

  return (
    <div className="body">
        <Navbar></Navbar>
        <div className='animated'>
          <motion.div initial="hidden" animate="visible" variants={lineVariants}>
            <h4>Hi There,</h4>
            <h2>I'm Liang Liu, a Software Developer from Florida</h2>      
          </motion.div>
          <motion.button className='checkoutButton'>Check out my Github</motion.button>
        </div>
    </div>
  )
}
