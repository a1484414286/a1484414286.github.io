import React, { Component } from 'react'
import { CircularProgress } from '@mui/material'

export default class ProgressBar extends Component {
  render() {
    const progressValue = this.props.progressValue;
    return (
        <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress variant='determinate' value={progressValue} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}></CircularProgress>
      </React.Fragment>
    )
  }
}
