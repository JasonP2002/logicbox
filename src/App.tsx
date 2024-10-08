import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import './App.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import { BlocklyWorkspace } from "react-blockly";
import toolbox from './logic_blocks/toolbox';
import SandBox from './components/SandBox';
import VerifyBar from './components/VerifyBar'

const default_ex = ''
const default_assums = []

function App() {
  const [state, setState] = useState("sidebar");
  const [ex, setEx] = useState(default_ex)
  const [assums, setAssums] = useState(default_assums);

  const changeState = (_, newState: string | null) => {
    if (state === "no-sidebar") {
      setState("sidebar")
    } else {
      setState("no-sidebar")
      setEx(default_ex)
      setAssums(default_assums)
    }
  };

  return (
    <div className="app">

      <TopBar />
      <ToggleButtonGroup value={state} onChange={changeState} className="toggle" fullWidth={true} exclusive>
          <ToggleButton value="sidebar">Lessons</ToggleButton>
          <ToggleButton value="no-sidebar">SandBox</ToggleButton>
      </ToggleButtonGroup>

      {state === "sidebar" ? <Sidebar setEx={setEx} setAssums={setAssums}/> : <SandBox />}

      <BlocklyWorkspace toolboxConfiguration={toolbox} workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
      }} className="sandbox-container" />

      <VerifyBar ex={ex} assums={assums}/>

    </div>
  )
}

export default App;
