import React, { useState } from 'react'
import { Timer, Stopwatch, Clock } from "../components";
import useModeContext from '../hooks/modes';

const ModeUI = ({modeId}) => {
    const modeList=useModeContext();
    const [session,setSession]=useState(0)
    const [rest,setRest]=useState(null)
    console.log(`modeUI ${modeList}`)
    console.log(modeList[modeId])
    switch (modeId) {
        case 0:
          return (
            <Timer
              session={modeList[modeId].session}
              rest={modeList[modeId].rest}
            />
          );
        case 1:
          return <Stopwatch />;
        case 2:
          return (
            <Timer
              session={modeList[modeId].session}
              rest={modeList[modeId].rest}
            />
          );
        case 3:
          return <Clock />;
        default:
          return (
            <Timer
              session={modeList[modeId].session}
              rest={modeList[modeId].rest}
            />
          );
      }
}

export default ModeUI;