import React, { useState } from "react";
import Timer from "./Timer"
import Buttons from "./Buttons";
import Header from "./Header";
import Modal from "./Modal";
import Design from "./Design";
import SpaceShip from "./SpaceShip";


const App = () => {
    const [seconds, setSeconds] = useState(0);
    const [paused, setPaused] = useState(true);
    const [lastTime, setLastTime] = useState(0);


document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    const count = 250;
    
    for(let i = 0; i<count; i++){
        let star = document.createElement('p');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 2;
        let duration = Math.random() * 10;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';
        star.style.animationDuration = 5+duration + 's';
        star.style.animationDelay= duration + 's';

        scene.appendChild(star);
    }

} )
    

    return (
        <div className="App">
        <main className="scene">
            <Header />
            <Design />
            <Timer lastTime={lastTime} paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} />
            <Buttons  lastTime={lastTime} setLastTime={setLastTime} paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} /> 
            <Modal lastTime={lastTime} setLastTime={setLastTime} paused={paused} setPaused={setPaused}  seconds={seconds} setSeconds={setSeconds}/>
            <SpaceShip lastTime={lastTime} seconds={seconds} />
        </main>
        </div>
    );
}

export default App;