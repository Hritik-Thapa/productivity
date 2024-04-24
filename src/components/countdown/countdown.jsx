import React, { useEffect, useRef, useState } from 'react'
import './countdown.css'

const Countdown = ({ time, statusChange }) => {
    const [start, setStart] = useState(false)
    const [sec, setSec] = useState(time * 60)
    // const [min, setMin] = useState()
    const displayRef = useRef(null);
    // console.log('time ', time)
    let timeDisplay = (remainingTime) => {
        let minutes = Math.floor(remainingTime / 60).toString().padStart(2, 0);
        let seconds = (remainingTime % 60).toString().padStart(2, 0);
        if (remainingTime === 0) {
            console.log('hi')
            statusChange();
            handleReset(false)
        }
        return `${minutes}:${seconds}`
    }
    function handleStart() {
        setStart(true);
        // console.log(sec);

        displayRef.current = setInterval(() => {
            setSec((sec) => sec - 1);
            // console.log(sec)
        }, 1000)
    }


    function handlePause() {
        setStart(false);
        console.log('pause');
        clearInterval(displayRef.current);
    }

    function handleReset(reset) {
        // console.log(`reset${reset}`)

        if (reset) {
            setStart(false);
            setSec(time * 60);
            clearInterval(displayRef.current);
        }
        else {
            setSec(time * 60);
        }
    }

    useEffect(()=>{
        setSec(time*60)
    },[time]);

    useEffect(() => {
        return () => clearInterval(displayRef.current)
    }, [])
return (
    <div className='timer-body'>
        <span className='timer-display drop-shadow'>{timeDisplay(sec)}</span>
        <div className='timer-buttons'>
            {!start ? <button className='start drop-shadow' onClick={handleStart}>Start</button> : <button className='pause' onClick={handlePause}>Pause</button>}
            <button className='reset drop-shadow' onClick={()=>handleReset(true)}>Reset</button>
        </div>
    </div>
)
}

export default Countdown;