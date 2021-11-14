const initialState = {
    userName: ""
}

export default function reducer(state = initialState, { type, userName }) {
    switch (type) {

        case "AUTHENTICATE":
            console.log("======auth");
            return Object.assign({}, state, {
                userName: userName
            });
        case "UNAUTHENTICATE":
            return Object.assign({}, state, {
                userName: userName
            });

        default:
            return state
    }
}
