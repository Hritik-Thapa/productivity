import React, { useState } from 'react'

const AddMode = ({ dispatch,addingMode }) => {

    const [pomo, setPomo] = useState(true);
    const [session, setSession] = useState(0);
    const [rest, setRest] = useState(null);

    function handleTypeSelect(e) {
        (e.target.value==='timer')?setPomo(false):setPomo(true);
    }

    function handleSessionChange(e) {
        let v = parseInt(e.target.value);
        setSession(v)
    }

    function handleRestChange(e) {
        let v = parseInt(e.target.value);
        setRest(v)
    }


function handleAdd() {
    let nametag = pomo ? "pomodoro" : "timer";
    dispatch({ type:'ADD', payload:{ name: nametag , session: session , rest: rest  } })
    addingMode();
}
return (
    <div>
        <h3>Add Custom mode</h3>
            <select name='mode' onChange={handleTypeSelect}>
                <option value="pomodoro">Pomodoro</option>
                <option value="timer">Timer</option>
            </select>
            <input type='number' step={5} placeholder='Session Length' value={session} onChange={handleSessionChange}></input>
            {pomo ? <input type='number' step={5} placeholder='Rest' value={rest} onChange={handleRestChange}></input> : ``}
            <button onClick={handleAdd}>Add</button>
    </div>
)
}

export default AddMode