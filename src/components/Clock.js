import React, {useState, useEffect} from 'react';

function Clock(){
    const[time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("Component is mounted or updated");
        const interval = setInterval(showTime, 1000);

        return () =>
        {
            console.log("Cleanup of the interval");
            clearInterval(interval);
        }

    }, [time]);
    
    function showTime() {
        return (
            setTime(new Date().toLocaleTimeString())
        );
    }

    return(
        <>
        <div>
            <h1>{time}</h1>
        </div>
        </>
    );
}

export default Clock;