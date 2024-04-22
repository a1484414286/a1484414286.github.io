import React, { useEffect, useState } from 'react';
import "../css/LoadingScreen.css";

export default function LoadingScreen() {
  const [cartDirection, setCartDirection] = useState("");
  
  useEffect(() => {
    var wheelAndHamster = document.querySelector('.wheel-and-hamster');
    var direction = Math.floor(Math.random() * 2); // Generating a random number between 0 and 1
    var newCartDirection = "";
    switch (direction) {
      case 0:
        newCartDirection = "https://imgur.com/Rwuu8f1.jpeg";
        wheelAndHamster.style.animationName = 'moveRight';
        break;
      case 1:
        newCartDirection = "https://imgur.com/Rwuu8f1.jpeg";
        wheelAndHamster.style.animationName = 'moveLeft';
        break;
      default:
        wheelAndHamster.style.animationName = 'moveRight';
        break;
    }
    setCartDirection(newCartDirection); // Set the cartDirection state
  }, []);


  return (
    <div className='screen'>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="container">

          <img className="cart" src={cartDirection} alt=''></img>
          <div className="hamster"></div>
          <img className="sunflower-seed" src={"https://imgur.com/NXC2n1f.jpeg"} style={{ width: "100px" }} alt=''></img>
        
        </div>

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
