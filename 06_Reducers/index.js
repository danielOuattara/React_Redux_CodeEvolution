

//----------------------------------------------

function buyCake() {  // Action :=  function that return an object of any shape
    return { 
        type: "BUY_CAKE",
        info: "First redux action"
    }
}

//-----------------------------------------------

// reducer = (previousState, action) => newState;  // retunrs always a new state

const initialState = {
    numberOfCakes: 10
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUY_CAKE': 
            state=  {
                // numberOfCakes: state.numberOfCakes - 1 // do not mutate the initial state, just create create a new one
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
            break;
        default: 
            return state;

    }

}