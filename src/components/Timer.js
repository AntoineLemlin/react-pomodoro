import React, { useState, useEffect } from "react";

const Timer = (props) => {
    const minutes = Math.floor(props.seconds/60);
    const seconds = Math.floor(props.seconds % 60);

    useEffect(() => {
        if(props.seconds > 0){
            if(props.paused === false){
                setTimeout(() => props.setSeconds(props.seconds - 0.01), 10)
            }
        }
    })


    return (
        <div className="timer">
            <h1>Pomodoro</h1>
            <h2>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
        </div>
    );
}
 
export default Timer;