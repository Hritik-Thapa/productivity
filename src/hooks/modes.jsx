import { useContext } from "react";
import modeContext from "../context/modeContext";

function useModeContext(){
    const mode=useContext(modeContext);
    // if (!mode)
    // {
    //     throw new Error('useModeContext must be given')
    // }
    console.log(`usemodecontext:${mode}`)
    return mode;
}

export default useModeContext;