import "./App.css";
import { useReducer, useState } from "react";
import data from "./resources/modeList.json";
import ModeUI from "./containers/ModeUI";
import modeContext from "./context/modeContext";
import ModeList from "./containers/ModeList";

function App() {
  const [currentMode, setCurrentMode] = useState(0);
  const [modeList, dispatch] = useReducer(modeListReducer, data.modeslist);

  // console.log(data.modeslist);
  function modeListReducer(state, action) {
    switch (action.type) {
      case "ADD":
        console.log("add triggered");
        return [...state, { ...action.payload, id: state.length,custom:true }];
      case "REMOVE":
        // const modeReset=()=>handleModeChange(0);
        // modeReset()
        handleModeChange(0);
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  }
  // const modes = data.modeslist.map((item) => item);
  console.log(modeList);

  // useMemo(()=>{
  //   // setModeList(modes);
  // },[])

  // useEffect(() => {
  //   console.log('usefeccsda')
  // },[]);

  function handleModeChange(mode) {
    console.log(`mode ${mode}`);
    setCurrentMode(mode);
  }

  return (
    <modeContext.Provider value={modeList}>
      <div className="App">
        <header>
          <h1>Productivity</h1>
        </header>
        <div className="timer">
          <ModeUI modeId={currentMode} />
        </div>
        <div className="modes">
          {/* <modeContext.Provider value={dispatch}> */}
          <ModeList modeChange={handleModeChange} dispatch={dispatch} />
          {/* </modeContext.Provider> */}
        </div>
      </div>
    </modeContext.Provider>
  );
}

export default App;
