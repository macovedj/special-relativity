import React from 'react';

const RelativisticClock = (props) => {

    return (
    <div>
        <div>I'm a relativisitic clock</div>
        <p>{props.time}</p>
        <input id="speedSlider" type="range" min="0" max="99.999" onChange={props.changeHandler}></input>
        <p>{props.speed}</p>
    </div>
    )
}

export default RelativisticClock;
