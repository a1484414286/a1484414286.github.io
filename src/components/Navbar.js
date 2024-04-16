import React, { Component } from 'react'
import '../css/Navbar.css'
import {motion} from 'framer-motion';


export default class Navbar extends Component {
  render() {
    return (

    <div class = "container right-bar">
        <motion.button className='button'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
          <span className='shadow'></span>
          <span className='edge'></span>
          <span className='front'>
            Home
          </span>
        </motion.button>

        <motion.button className='button'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
          <span className='shadow'></span>
          <span className='edge'></span>
          <span className='front'>
            About
          </span>
        </motion.button>
    </div>

    )
  }
}
