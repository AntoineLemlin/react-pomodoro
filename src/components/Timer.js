import React, { useState, useEffect } from "react";

const Timer = (props) => {
    const minutes = Math.floor(props.seconds/60);
    const seconds = Math.floor(props.seconds % 60);

    useEffect(() => {
        if(props.seconds > 0){
            if(props.paused === false){
                setTimeout(() => props.setSeconds(props.seconds - 0.5), 500)
            }
        }else if(props.seconds <= 0 && props.lastTime !== 0){
            document.querySelector('.modal').style.visibility ="visible";
            document.querySelector('.modal').style.transform = "translateX(0)";
            document.querySelector('.modal').style.transition = "transform 2s";
            setTimeout(() => document.querySelector('.modal').style.removeProperty('transition'), 2000);
        }
    })


    return (
        <div className="timer">
            <h2>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
        </div>
    );
}
 
export default Timer;