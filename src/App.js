import React, { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num+1);
  }

  const subNum = () => {
    if(num>0){
      setNum(num-1);
    }
    else{
      setNum(0);
      alert("Zero limit reached.");
    }

  }
  return(
  <>
    <div className="main_div">
      <div className="center_div">
        <h1> {num} </h1>
        <div className="btn_div">
          <button onClick={addNum}> Increment </button>
          <button onClick={subNum}> Decrement </button>
        </div>
      </div>
    </div>

  </>
  )
}

export default App;
