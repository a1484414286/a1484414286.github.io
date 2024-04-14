import React from 'react'
import {motion} from 'framer-motion'
import '../css/CardItem.css'


export default class CardItem extends React.Component {
    render()
    {
        const variants = 
        {
            offscreen : 
            {
                y:300
            },
            onscreen:
            {
                y:50,
                rotate : -10,
                transition:
                {
                    type:"spring",
                    bounce:0.4,
                    duration : 0.8
                }
            }
        };

        const { img, hueA, hueB } = this.props;
        const background = `linear-gradient(306deg, hsl(${hueA}, 100%, 50%), hsl(${hueB}, 100%, 50%))`;

    
    return(


    <motion.div
        className="card-container container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>


        <div className="splash" style={{ background }} />
        
        <motion.div className="card" variants={variants}>
            {img}
        </motion.div>
    </motion.div>
  );
    }
}
