import { useContext } from "react"
import modeContext from "../context/modeContext"

export const useDispatch=()=>{
    const  dispatch=useContext(modeContext);
    if(!dispatch){
        throw new Error('useDispatch must be used within provider')
    }
    return dispatch;
}