import React, {  useRef, useState } from 'react'
import './countdown.css'

const Countdown = ({time,statusChange}) => {
    const [start,setStart]=useState(false)
    const [sec, setSec] = useState(time*60)
    // const [min, setMin] = useState()
    const displayRef=useRef(null);

    let  timeDisplay=(time)=>{
        let minutes=Math.floor(time/60).toString().padStart(2,0);
        let seconds=(time%60).toString().padStart(2,0);
        if (time===0){
            console.log('hi')
            statusChange();
            handleReset(true)
        }
        return `${minutes}:${seconds}`
    }
    function handleStart() {
        setStart(true);
        console.log(sec);

        displayRef.current = setInterval(() => {
                setSec((sec)=>sec - 1);
                console.log(sec)
        }, 1000)
    }

    
    function handlePause() {
        setStart(false);
        console.log('pause');
        clearInterval(displayRef.current);
    }

    function handleReset(reset) {
        if (!reset){
        setStart(false);
        setSec(time*60);
        clearInterval(displayRef.current);}
        else{
            setSec(time*60);
        }
    }
  return (
    <div className='timer-body'>
        <span className='timer-display'>{timeDisplay(sec)}</span>
        <div className='timer-buttons'>
            {!start ? <button className='start' onClick={handleStart}>Start</button> : <button className='pause' onClick={handlePause}>Pause</button>}
            <button className='reset' onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Countdown;