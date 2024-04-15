import "./App.css";
import { useEffect, useState } from "react";
// import data from "./resources/modeList.json";
import ModeUI from "./containers/ModeUI";
import modeContext from "./context/modeContext";

function App() {
  const [currentMode, setCurrentMode] = useState(1);
  const [modeList,setModeList]=useState([]);
  // useEffect( async () => {
  //   try{
  //     const response=await fetch('./containers/ModeUI');
  //     const data=response.json();
  //     setModeList(data);
  //   } catch (errror){
  //     console.error('No data')
  //   }
    
  // }, []);

  // useEffect(()=>{
  //   setModeList(data.modeslist);
  //   console.log(modeList)

  // },[])
  // console.log(`app ${modeList}`)

  const data=fetch("./resources/modeList.json").then(response=> {
    return response.json();
  })
  

  function handleModeChange(mode) {
    setCurrentMode(mode);
  }

  return (
    <modeContext.Provider value={data.modelist}>
      <div className="App">
        <header>
          <h1>Productivity</h1>
        </header>
        <div className="body">
          <ModeUI modeId={currentMode} />
        </div>
        <div className="modes">
          <div className="mode-buttons current" onClick>
            {" "}
            Pomodoro
          </div>
          <div className="mode-buttons "> Stopwatch</div>
          <div className="mode-buttons "> Timer</div>
          <div className="mode-buttons "> Clock</div>
        </div>
      </div>
    </modeContext.Provider>
  );
}

export default App;
