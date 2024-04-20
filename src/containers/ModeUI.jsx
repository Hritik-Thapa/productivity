import React from 'react'
import { Timer, Stopwatch, Clock } from "../components";
import useModeContext from '../hooks/modes';

const ModeUI = ({modeId}) => {
    const modeList=useModeContext();
    console.log(`modeUI ${modeList}`)
    console.log(modeList[modeId])
    switch (modeId) {
        case 1:
          return <Stopwatch />;
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