import { useState } from 'react';


function useSigninStatus(status) {

    const [isSignin, Update] = useState(status);

    function Signin() {

        Update(true)
    }

    function Signout() {
        Update(false)
    }
    return {
        isSignin,
        Signin,
        Signout,
    }
}

export default useSigninStatus;