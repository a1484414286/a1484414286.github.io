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
                y: 300,
            },

            hover:
            {
                y: 100,
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
                initial="offscreen"
                whileInView="hover"
                viewport={{ once: false, amount: 0.8 }}>
                <motion.div className="card" variants={variants}>{img}</motion.div>
            </motion.div>
        </div>
    );
    }
}
