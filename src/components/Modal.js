import React from "react";
import "../styles/index.css";

const Modal = (props) => {

    const restartTimer = () => {
        document.querySelector('.modal').style.transform = "translateX(250%)";
        document.querySelector('.modal').style.transition = "transform 2s";
        setTimeout(() => {
            document.querySelector(".modal").style.visibility = "hidden";
            document.querySelector('.modal').style.transform = "translateX(-250%)";
            props.setSeconds(props.lastTime);
            props.setPaused(false);
        }, 2000);
    }
    
    const stopTimer = () => {
        props.setPaused(true);
        document.querySelector('.modal').style.transform = "translateX(250%)";
        document.querySelector('.modal').style.transition = "transform 2s";
        setTimeout(() => {
            document.querySelector(".modal").style.visibility = "hidden";
            document.querySelector('.modal').style.transform = "translateX(-250%)";
        }, 2000);
    }
    return (
        <div className="modal">
            <div className="buttons">
                <button className="btn-modal" type="button" onClick={restartTimer}><i className="fas fa-redo-alt"></i></button>
                <button className="btn-modal" type="button" onClick={stopTimer}><i className="fas fa-stop"></i></button>
            </div>
        </div>
    );
}
 
export default Modal;