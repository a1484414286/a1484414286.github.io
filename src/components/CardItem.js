import {motion} from 'framer-motion'
import '../css/CardItem.css'
import React from 'react';


export default class CardItem extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        modal : false,
      };
    }
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

      
        const modalOpen = () => {
            this.setState({ modal: !this.state.modal });
        }


        const {img,text} = this.props;
                return(
                        <motion.div
                            onClick={modalOpen}
                            className="card-container container "
                            viewport={{ once: false, amount: 0.8 }}>
                            {
                                this.state.modal ?
                                (
                                    <motion.div onClick={modalOpen} src={img} initial="offScreen" whileHover="onscreen" className="card" variants={variants}>
                                        <span>{this.props.hidden}</span>
                                    </motion.div>
                                )
                                :
                                (
                                    <motion.div onClick={modalOpen} src={img} initial="offScreen" whileHover="onscreen" className="card" variants={variants}>
                                        <div className='img-box'>
                                            <img className='card-image' alt="Card" src={img} />
                                        </div>
                                        <div className='title'>
                                            <h1 style={{color : "black"}}>{text}</h1>
                                        </div>
                                    </motion.div>
                                )
                            }

                        </motion.div>
            );
    }
}
