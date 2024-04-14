import React, { Component } from 'react'
import '../css/Navbar.css'
import {motion} from 'framer-motion';


export default class Navbar extends Component {
  render() {
    return (

    <div class = "container right-bar">
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
            Home
        </motion.button>

        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}>
            About
        </motion.button>
    </div>

    )
  }
}
