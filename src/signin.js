import React from 'react';

function Signin(props) {
    return <button
        onClick={props.isSignin ? props.Signout : props.Signin} >
        {props.isSignin ? "Signout" : "Sign in"}</button>


}


export default Signin;