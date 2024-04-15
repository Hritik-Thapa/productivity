import React, {useState } from 'react'
import Countdown from '../countdown/countdown'
import ringing from '../../resources/ringing.mp3'
import './timer.css'

const Timer = ({ session, rest }) => {
    
    const [work,setWork]=useState(true);
    console.log(`session=${session} rest:${rest}`)
    let buzzer= new Audio(ringing)

    function workCallback(){
        buzzer.play();
        if(rest){
            setWork(!work)
        }
        else{
            return
        }
    }
    
    return (
        <div>
            <div className='container'>
                {rest?work?<h1>Work</h1>:<h1>Break</h1>:<h1>Timer</h1>}
                <Countdown time={work?session : rest} statusChange={workCallback}/>
            </div>
        </div>
    )
}

export default Timer