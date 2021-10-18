import React, { useState } from "react";

const Buttons = (props) => {
    const [lastTime, setLastTime] = useState(0);

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
        props.setPaused(true);
        props.setSeconds(props.seconds + 60);
        setLastTime(props.seconds + 60);
    }

    const removeMinutes = () => {
        props.setPaused(true);
        props.setSeconds(props.seconds - 60);
        setLastTime(props.seconds - 60);
    }

    const resetMinutes = () => {
        props.setPaused(true);
        props.setSeconds(lastTime);
    }

    return (
        <div className="buttons">
            <button type="button" onClick={pauseTimer} >Start</button>
            <button type="button" onClick={addMinutes} >+</button>
            <button type="button" onClick={removeMinutes}>-</button>
            <button type="button" onClick={resetMinutes}>Reset</button>
        </div>
    );
}
 
export default Buttons;