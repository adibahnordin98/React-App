import Clock from './Clock';
import { useState } from 'react';

function ClockControl() {
    const [flag, setFlag] = useState(false);

    const handleClockOnClick = () => {
        setFlag(true);
    };

    const handleClockOffClick = () => {
        setFlag(false);
    };

    let button;
    if(flag){
        button = <ClockOffButton onClick={handleClockOffClick} />
    }
    else{
        button = <ClockOnButton onClick={handleClockOnClick} />
    }

    return(
        <div>
            {button}
        </div>
    )
}

function  ClockOnButton(props){
    return (
        <>
            <button onClick={props.onClick}>Turn Off Clock</button>
            <div><Clock/></div>
        </>
    );
}

function  ClockOffButton(props){
    return (
        <>
            <button onClick={props.onClick}>Turn On Clock</button>
            <div><h1>Clock Is Off</h1></div>
        </>
    );
}

export default ClockControl;