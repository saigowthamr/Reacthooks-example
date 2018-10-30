import React from 'react';


export default (props) => {

    if (props.isSignin) {
        return <div>
            <h1> {props.value}</h1>
            <button onClick={props.Increment} >Increment</button>
            <button onClick={props.Decrement} >Decrement</button>
        </div>
    }

    return null
}