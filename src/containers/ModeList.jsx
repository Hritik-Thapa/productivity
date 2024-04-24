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
            <button className='custom-button' onClick={()=>modeChange(mode.id)}>
                <p className='custom-button_title'>{mode.name}</p>
                <p className='custom-button_sub-title'>{mode.session} / {mode.rest}</p>
                <button onClick={()=>handleDelete(mode)}>x</button>
            </button>
            
            </>
        )
    }
  return (
    <>  
        <div className='top-row'>
            <p className='drop-shadow modes-title'>Modes</p>
            <button className=''>L</button>
        </div>
        {modeList.map((mode)=>{
            return(
                mode.custom?customMode(mode):<button onClick={()=>modeChange(mode.id)}>{mode.name}</button>
            )    
        })}
        <button onClick={handleAdd} className='plus-button'>+</button>
        {addingMode&&(<AddMode dispatch={dispatch} addingMode={handleAdd}/>)}
    </>
  )
}

export default ModeList