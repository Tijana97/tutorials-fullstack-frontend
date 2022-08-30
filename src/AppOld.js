import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount} from './redux/counter/counterSlice'


function App() {

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const increaseVal = () =>{
    dispatch(increment())
  }

  const decreaseVal = () => {
    dispatch(decrement())
  }

  const onChangeValue = (event) => {
    setInput(event.target.value)
  }

  const increaseValByAmount = () =>{
    dispatch(incrementByAmount(Number(input)))
  }

  return (
    <>
    <div>

      <div style={{
        display: "flex"
      }}>
        <button onClick={decreaseVal}>-</button>
        <p style={{maxHeight: "5px", margin: 0}}>{counter}</p>
        <button onClick={increaseVal}>+</button>
      </div>

    </div>
    <input value = {input} onChange = {onChangeValue}></input>
    <button onClick={increaseValByAmount}>Add amount</button>
    </>
  );
}

export default App;
