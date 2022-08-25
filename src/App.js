import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  const [showError, setshowError] = useState(false)

  const increaseVal = () =>{
    if(showError){
      setshowError(false)
    }
    setCounter(counter+1)
  }

  const decreaseVal = () => {
    if(counter === 0){
      setshowError(true)
      return
    } 
    setCounter(counter-1)
  }

  return (

    <div>

      <div style={{
        display: "flex"
      }}>
        <button onClick={decreaseVal}>-</button>
        <p style={{maxHeight: "5px", margin: 0}}>{counter}</p>
        <button onClick={increaseVal}>+</button>
      </div>

      {showError && 
        (<div style = {{background: "blue"}}>
        Value cannot be lower than zero!
      </div>)}

    </div>
  );
}

export default App;
