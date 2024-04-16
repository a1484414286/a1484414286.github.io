import Navbar from './Navbar'
import '../css/LandingPage.css'
import {motion} from "framer-motion";
import React from 'react'; // Import the missing useEffect hook
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
          <motion.button className='checkoutButton'>Check out my Github</motion.button>
        </div>
    </div>
  )
}
