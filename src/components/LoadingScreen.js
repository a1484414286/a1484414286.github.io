import React, { useEffect } from 'react';
import "../css/LoadingScreen.css";

export default function LoadingScreen() {
  
useEffect(() => {
    var wheelAndHamster = document.querySelector('.wheel-and-hamster');
    var direction = Math.floor(Math.random() * 4);
    switch (direction) {
        case 0:
            wheelAndHamster.style.animationName = 'moveRight';
            break;
        case 1:
            wheelAndHamster.style.animationName = 'moveLeft';
            break;
        case 2:
            wheelAndHamster.style.animationName = 'moveUp';
            break;
        case 3:
            wheelAndHamster.style.animationName = 'moveDown';
            break;
        default:
            wheelAndHamster.style.animationName = 'moveRight';
            break;
    }
}, []);

  return (
    <div>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );
}