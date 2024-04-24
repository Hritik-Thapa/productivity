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
    }
    
    return (
        <>
            <div className='container drop-shadow'>
            <p className='drop-shadow'>{rest?work?'Work':'Break':'Timer'}</p>
                <Countdown time={work?session : rest} statusChange={workCallback}/>
            </div>
        </>
    )
}

export default Timer