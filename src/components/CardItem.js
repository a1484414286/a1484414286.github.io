import {motion} from 'framer-motion'
import '../css/CardItem.css'
import React from 'react';


export default class CardItem extends React.Component {
    render()
    {
        const variants =
        {
            offscreen:
            {
                y: 400,
            },

            onscreen:
            {
                y: -10,
                rotate: 0,
                transition:
                {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                }
            }
        };

        const {img} = this.props;
        return(
        <div>
            <motion.div
                className="card-container container"
                viewport={{ once: false, amount: 0.8 }}>
                <motion.div initial="offScreen" whileHover="onscreen" className="card" variants={variants}>{img}</motion.div>
            </motion.div>
        </div>
    );
    }
}
