import React, { Component } from 'react'
import '../css/Navbar.css'
import {motion} from 'framer-motion';


export default class Navbar extends Component {
  render() {
    const scrollToTop = () => 
    {
      document.getElementById('home').scrollIntoView({behavior : 'smooth'});
    }

    return (

    <div>

        <motion.button 
          className='button'
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          onClick={scrollToTop}
        >
          <span className='shadow'></span>
          <span className='edge'></span>
          <span className='front' >
            Home
          </span>
        </motion.button>

        <motion.button 
        className='button'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
          <span className='shadow'></span>
          <span className='edge'></span>
          <span className='front'>
            Contact
          </span>
        </motion.button>
    </div>

    )
  }
}
