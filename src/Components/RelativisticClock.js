import React, { Component } from 'react';

class RelativisticClock extends Component {
    constructor(props) {
        super();
        this.state = {
            lastInc: undefined,
            stationaryTime: props.time,
            speedOfMover: 0.0,
            gamma: 1.0,
            moversTimemiilli: Date.now(),
            moversTime: props.time
        };

        this.props = props;
        this.handleChange = this.handleChange.bind(this);
    }

    currentTime() {
        if (this.state.lastInc === undefined) {
            this.setState({lastInc: Date.now()});
        } else if(Date.now() - this.state.lastInc > this.state.gamma) {
            let nextTimeMilli = this.state.moversTime + 1;
            let nextTime = new Date(nextTimeMilli);
            let nextTimeFinal = nextTime.toLocaleString();
            this.setState({
                moversTimeMilli: nextTimeMilli,
                moversTime: nextTimeFinal
            });
        }
        console.log(Date.now() - this.state.lastInc);
        console.log(this.state.gamma * 0.1);
    }

    componentWillMount() {
        setInterval(() => this.currentTime(), 100);
    }

    handleChange(event) {
        this.setState({ speedOfMover: event.target.value });
        let newGamma = 1.0 / Math.sqrt(1.0 -(Math.pow(this.state.speedOfMover, 2)));
        this.setState({gamma: newGamma});
    }

    render() {

        return (
            <div>
                <div>I'm a relativisitic clock</div>
                <p>{Date(this.state.moversTime).toLocaleString()}</p>
                <input id="speedSlider" type="range" min="0" max="0.9" step="0.1" onChange={this.handleChange}></input>
                <p>You are travelling at {this.state.speedOfMover || 0} times the speed of light</p>
            </div>
        );
    }
}

export default RelativisticClock;
