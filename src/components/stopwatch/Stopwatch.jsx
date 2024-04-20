import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  const [sec,setSec]=useState(0);
  const [start,setStart]=useState(false)
  const display=useRef();

  const timeDisplay=(remainingTime)=>{
    let minutes=Math.floor(remainingTime/60).toString().padStart(2,0);
    let seconds=(remainingTime%60).toString().padStart(2,0)
    return(`${minutes}:${seconds}`)
  }


  function handleStart(){
    setStart(true);
   display.current=setInterval(()=>{
    setSec(sec=>sec+1)
   },1000)
  }

  function handleStop(){
    setStart(false);
    clearInterval(display.current);
  }

  function handleReset(){
    handleStop();
    setSec(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
        {timeDisplay(sec)}
        {!start?<button onClick={handleStart}>Start</button>:<button onClick={handleStop}>Stop</button>}
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch;