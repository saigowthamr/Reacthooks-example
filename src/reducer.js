
function reducer(state, action) {

    switch (action.type) {
        case "Increment":
            return {
                ...state,
                value: state.value + 1
            };
        case "Decrement":
            return {
                ...state,
                value: state.value - 1
            }
        case "Resetcounter":
            return {
                ...state,
                value: 0,
            }
        case "Signin":
            return {
                ...state,
                isSignin: true
            };
        case "Signout":
            return {
                ...state,
                isSignin: false
            }

        default:
            return state
    }
}


export { reducer };