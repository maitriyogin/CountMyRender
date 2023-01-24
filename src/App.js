import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {Counter} from "./Counter";
import {useRerenderCount} from "./useRerenderCount";

function App() {
  const [countState, setCountState] = useState({
    a: 0,
    b: 0
  })
  const totalCount = Object.values(countState).reduce((a,c) => a + c, 0)
  const handleUpdateCount = (id) => {
    console.log("---------------- HANDLE UPDATE COUNT", id)
    setCountState({...countState, [id]: countState[id]+1})
  }
  useRerenderCount('App')
  return (
    <div className="App">
      <header className="App-header">
        Render Counter
        <h1>Total Count : {totalCount}</h1>
        <p>
          <Counter handleUpdateCount={handleUpdateCount} count={countState['a']} id={'a'}/>
          <Counter handleUpdateCount={handleUpdateCount} count={countState['b']} id={'b'}/>
        </p>
      </header>

    </div>
  );
}

export default App;
