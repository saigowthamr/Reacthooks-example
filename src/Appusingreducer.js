import React, { useReducer, useEffect } from 'react';
import './App.css';
import { reducer } from './reducer';
import Auth from './signin';
import Counter from './counter';

function App(props) {

    let [state, dispatch] = useReducer(reducer, { value: 0, isSignin: false })

    useEffect(() => {

        if (!state.isSignin) {
            dispatch({ type: "Resetcounter" })
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                <Auth isSignin={state.isSignin}
                    Signin={() => { dispatch({ type: "Signin" }) }}
                    Signout={() => { dispatch({ type: "Signout" }) }}
                />
                <Counter
                    isSignin={state.isSignin}
                    value={state.value}
                    Increment={() => { dispatch({ type: "Increment" }) }}
                    Decrement={() => { dispatch({ type: "Decrement" }) }} />
            </header>
        </div>
    );

}

export default App;
