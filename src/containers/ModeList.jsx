import React, { useState } from 'react'
import useModeContext from '../hooks/modes'
// import { useDispatch } from '../hooks/dispatch';
import AddMode from '../components/Addmode/AddMode';

const ModeList = ({ modeChange, dispatch }) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [addingMode, setAddingMode] = useState(false)
    const modeList = useModeContext();

    console.log(`modelist${modeList}`)

    const Menu = () => {
        return (
            <>
                {modeList.map((mode) => {
                    return (
                        mode.custom ? customMode(mode) : <button onClick={() => modeChange(mode.id)}>{mode.name}</button>
                    )
                })}
                <button onClick={handleAdd} className='plus-button'>+</button>
                {addingMode && (<AddMode dispatch={dispatch} addingMode={handleAdd} />)}
            </>
            
        )

    }

    // const handleMenuButton=()=>{
    //     setToggleMenu(!toggleMenu);
    // }

    const MenuButton=()=>{
        
       return( <div className={`menu-icon ${toggleMenu?'menu-open':'menu-close'}`} onClick={()=>setToggleMenu(!toggleMenu)}>
                    <div className='menu-icon_lines'>
                        <span className='menu-icon_line line-1'></span>
                        <span className='menu-icon_line line-2'></span>
                        <span className='menu-icon_line line-3'></span>
                    </div>
                </div>)
    }


    function handleAdd() {
        setAddingMode(!addingMode);
    }

    function handleDelete(mode) {
        dispatch({ type: 'REMOVE', payload: mode.id })
    }

    function customMode(mode) {
        return (
            <>
                <button className='custom-button' onClick={() => modeChange(mode.id)}>
                    <p className='custom-button_title'>{mode.name}</p>
                    <p className='custom-button_sub-title'>{mode.session} {mode.name === 'pomodoro' ? `/ ${mode.rest}` : ''}</p>
                    <button onClick={() => handleDelete(mode)}>x</button>
                </button>

            </>
        )
    }


    return (
        <>
            <div className='menu'>
            <div className='top-row'>
                <p className='drop-shadow modes-title'>Modes</p>
                <button className=''>L</button>
            </div>
            <Menu/>
            </div>
            <div className='menu-bar'>
                <MenuButton className='menu-button'/>
                {toggleMenu && (<div className='menu-bar_list'>
                <Menu/>
                </div>)}
            </div>
        </>
    )
}

export default ModeList