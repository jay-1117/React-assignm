import { useState } from 'react';
import './App.css';
import ClassCyle from './ClassCyle';

function App() {

  let[change, setchange]= useState(false)

  let[isVisible,setVisible]=useState(true)

  return (
    <div>

      {isVisible === true && <ClassCyle name={change === true ? "Jay" : "Jay Patel"}/>}

      <button onClick={()=>{setchange(true)}} >Click to change</button>
      <button onClick={()=>{setVisible(false)}}>Remove Component</button>
    </div>
  );
}

export default App;

