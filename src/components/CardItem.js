import {motion} from 'framer-motion'
import '../css/CardItem.css'
import React from 'react';
import {IconButton} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default class CardItem extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        modal : false,
        transformed : false,
        frontTransform : false
    };
    }
    render()
    {
        const variants =
        {
            flipped :
            {
                rotateY : 90,
                transition:
                {
                    type : "spring",
                    bounce: 0.3,
                    duration : 0.1
                }
            },
            hover :
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
            this.setState({transformed : false});
            this.setState({ modal: !this.state.modal });
            this.setState({frontTransform : false})
        }

        const transformEnd = () => 
        {
            //this acts as a first time trigger protective mechanism 
            //why? you may ask. it's because when the card is flipped at first, onAnimationComplete will see that there is no animation playing
            //therefore, it will consider the animation has been completed. it will flip the card when i click it first
            if(this.state.transformed)
            {
                modalOpen();
            }
        }
        
        const transformController = () => 
        {
            this.setState({transformed : !this.state.transformed})
        }



        const frontTransformController = () =>
        {
            this.setState({frontTransform : !this.state.frontTransform});
        }

        const flippedAnimation = () =>
        {
            //similar process thought as previous one
            if(this.state.frontTransform)
            {
                this.setState({modal : !this.state.modal})
            }
        }

        const {img,text} = this.props;
                return(
                        <motion.div
                            className="card-container container"
                            viewport={{ once: false, amount: 0.8 }}>
                                {
                                this.state.modal ?
                                (
                                    <motion.div src={img} 
                                    animate = {this.state.transformed ? "flipped" : ""} 
                                    whileHover="hover" 
                                    className="card back-card"
                                    variants={variants}
                                    onAnimationComplete={transformEnd}
                                    >   
                                        <div className="X-button-container">
                                            <button className="X-button" onClick={transformController}>X</button>
                                        </div>

                                        <div className="text-container">
                                            <span style={{fontSize:"small", color:"#2f5496"}}>{this.props.hidden}</span>
                                        </div>
                                        
                                        <div className='github-button-container' >
                                            <div className='github-button'>
                                                <IconButton>
                                                    <GitHubIcon  fontSize='medium'/>
                                                </IconButton>
                                            </div>
                                        </div>

                                    </motion.div>
                                )
                                :
                                (
                                    <motion.div onClick={frontTransformController}
                                    whileHover="hover" 
                                    className="card" 
                                    animate = {this.state.frontTransform ? "flipped" : ""}
                                    onAnimationComplete={flippedAnimation}
                                    variants={variants}
                                    >
                                        <div className='img-box'>
                                            <img className='card-image' alt="Card" src={img} />
                                        </div>
                                        <div className='title'>
                                            <h1 style={{color : "#2f5496"}}>{text}</h1>
                                        </div>
                                    </motion.div>
                                )
                            }

                        </motion.div>
            );
    }
}
