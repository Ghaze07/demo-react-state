import React, { useState } from 'react';
import './Room.css';

function Room() {
    //const state = useState(true);
    //console.log("State =", state);
    const [isLit, setLit] = useState(true);
    let [age, setAge] = useState(25);
     
    function updateLit() {
        console.log("Button Clicked");
        
        setLit(!isLit);
    }
    
    const increaseAge = ()=> {
        console.log("Age Button Clicked");
        setAge(++age);
    }
  return (
    <div className={`room ${isLit? "lit": "dark"}`}>
      This Room is {isLit? "lit": "dark" }
      <br />
      Age : {age}
      <br />
  <button onClick={updateLit}> Toggle Light</button>
  <br />
  <button onClick={increaseAge}> Increase Age</button>
    </div>
  );
}

export default Room;
