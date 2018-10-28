import React from 'react';

const Clock = (props) => {
    return (
    <div>
        <div>I'm a standard clock</div>
        <p>{props.time}</p>
    </div>
    )
}

export default Clock;
