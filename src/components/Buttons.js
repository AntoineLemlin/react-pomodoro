import React, { useState } from "react";

const Buttons = (props) => {
    if(props.seconds < 0){
        props.setSeconds(0);
    }

    const pauseTimer = () =>{
        if(props.paused){
            props.setPaused(false);
        }else{
            props.setPaused(true);
        }
    }

    const addMinutes = () => {
        if(props.paused){
            props.setSeconds(props.seconds + 60);
            props.setLastTime(props.seconds + 60);
        }
    }

    const removeMinutes = () => {
        if(props.paused){
            props.setSeconds(props.seconds - 60);
            props.setLastTime(props.seconds - 60);
        }
    }

    const resetMinutes = () => {
        props.setPaused(true);
        setTimeout(() =>  props.setSeconds(props.lastTime), 500)
    }

    return (
        <div className="buttons">
            <button className="earth" type="button" onClick={pauseTimer} ><i className={props.paused ? "fas fa-play" : "fas fa-pause"}></i></button>
            <button className="mars" type="button" onClick={addMinutes} ><i className="fas fa-plus"></i></button>
            <button className="mercury" type="button" onClick={removeMinutes}><i className="fas fa-minus"></i></button>
            <button className="jupiter" type="button" onClick={resetMinutes}><i className="fas fa-redo-alt"></i></button>
        </div>
    );
}
 
export default Buttons;