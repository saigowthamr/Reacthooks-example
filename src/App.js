import React, { useState, useEffect } from 'react';
import './App.css';
import Signin from './signin';
import Counter from './counter';
import useSigninStatus from './status';

function App(props) {

  const [value, Setvalue] = useState(0);

  let status = useSigninStatus(false)


  function Incvalue() {
    return Setvalue(value + 1)
  }

  function Decvalue() {
    return Setvalue(value - 1)
  }

  useEffect(() => {
    if (!status.isSignin) {
      Setvalue(0)
    }
  })


  return (
    <div className="App">
      <a className="link" href="https://saigowthamr.github.io/Reacthooks-example">Github</a>
      <header className="App-header">
        <Signin {...status} />
        <Counter isSignin={status.isSignin} value={value} Increment={Incvalue} Decrement={Decvalue} />
      </header>
    </div>
  );

}

export default App;
