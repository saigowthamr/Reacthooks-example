# React hooks

Example of Signin Component using React hooks

```js
import React, { useState, useEffect } from 'react';
import './App.css';
import Signin from './signin';
import Counter from './counter';
import useSiginstatus from './status';

function App(props) {

  const [value, Setvalue] = useState(0);

  let status = useSiginstatus(false)


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
      <header className="App-header">
        <Signin {...status} />
        <Counter isSignin={status.isSignin} value={value} Increment={Incvalue} Decrement={Decvalue} />
      </header>
    </div>
  );

}

export default App;
```



## Install

```sh
git clone git@github.com:saigowthamr/Reacthooks-example.git
npm install
npm start
```




