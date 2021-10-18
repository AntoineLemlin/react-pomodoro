import React, { useState } from "react";
import Timer from "./Timer"
import Buttons from "./Buttons";


const App = () => {
    const [seconds, setSeconds] = useState(0);
    const [paused, setPaused] = useState(true);
    return (
        <div className="App">
        <main>
            <Timer paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} />
            <Buttons  paused={paused} setPaused={setPaused} seconds={seconds} setSeconds={setSeconds} /> 
        </main>
        </div>
    );
}

export default App;