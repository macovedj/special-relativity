import React from 'react';

const RelativisticClock = (props) => {

    return (
    <div>
        <div>I'm a relativisitic clock</div>
        <p>{props.time}</p>
        <input id="speedSlider" type="range" min="0" max="0.9" step="0.1" onChange={props.changeHandler}></input>
        <p>You are travelling at {props.speed || 0} times the speed of light</p>
    </div>
    )
}

export default RelativisticClock;
