import React, {  useState } from 'react'
import useModeContext from '../hooks/modes'
// import { useDispatch } from '../hooks/dispatch';
import AddMode from '../components/Addmode/AddMode';

const ModeList = ({modeChange,dispatch}) => {

    const [addingMode,setAddingMode]=useState(false) 
    const modeList=useModeContext();

    console.log(`modelist${modeList}`)

    

    function handleAdd(){
        setAddingMode(!addingMode);
    }

    function handleDelete(mode){
        dispatch({type:'REMOVE',payload:mode.id})
    }

    function customMode(mode){
        return(
            <>
            <button onClick={()=>modeChange(mode.id)}>
                {mode.name}
            </button>
            <button onClick={()=>handleDelete(mode)}>x</button>
            </>
        )
    }
  return (
    <>
        {modeList.map((mode)=>{
            return(
                mode.custom?customMode(mode):<button onClick={()=>modeChange(mode.id)}>{mode.name}</button>
                // <button onClick={()=>modeChange(mode.id)}>{mode.custom?`custom ${mode.name}`:`${mode.name}`}</button>
            )    
        })}
        <button onClick={handleAdd}>+</button>
        {addingMode&&(<AddMode dispatch={dispatch} addingMode={handleAdd}/>)}
    </>
  )
}

export default ModeList