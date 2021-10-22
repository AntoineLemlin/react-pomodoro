import React, { useRef } from "react";

const SpaceShip = (props) => {
    const slide ={
        "left": `calc(${(props.seconds/props.lastTime) * 100}% - 170px)`,
    }

    const ship = useRef();

    if(props.seconds === 0 && props.lastTime !== 0){
        ship.current.style.display = "none";    
        ship.current.style.left = "100%";

        setTimeout(() => ship.current.style.display = "block", 1000);
    }
    console.log(slide)
    return (
        <div id="spaceship" className="spaceship">
            <div ref={ship} style={slide} className="container"></div>
        </div>
    );
}
 
export default SpaceShip;