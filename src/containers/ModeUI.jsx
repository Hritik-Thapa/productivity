import React from 'react'
import { Timer, Stopwatch, Clock } from "../components";
import useModeContext from '../hooks/modes';

const ModeUI = ({modeId}) => {
    const modeList=useModeContext();
    switch (modeId) {
        case 1:
          return (
            <Timer
              session={modeList[modeId].session}
              rest={modeList[modeId].rest}
            />
          );
        case 2:
          return <Stopwatch />;
        case 3:
          return (
            <Timer
              session={modeList[modeId].session}
              rest={modeList[modeId].rest}
            />
          );
        case 4:
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