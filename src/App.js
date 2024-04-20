import "./App.css";
import { useReducer, useState } from "react";
import data from "./resources/modeList.json";
import ModeUI from "./containers/ModeUI";
import modeContext from "./context/modeContext";
import ModeList from "./containers/ModeList";

function App() {
  const [currentMode, setCurrentMode] = useState(0);
  const [modeList, dispatch] = useReducer(modeListReducer, data.modeslist);

  function modeListReducer(state, action) {
    switch (action.type) {
      case "ADD":
        console.log("add triggered");
        return [...state, { ...action.payload, id: state.length,custom:true }];
      case "REMOVE":
        handleModeChange(0);
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  }

  console.log(modeList);


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
          <ModeList modeChange={handleModeChange} dispatch={dispatch} />
        </div>
      </div>
    </modeContext.Provider>
  );
}

export default App;
