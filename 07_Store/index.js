const redux = require("redux");
const createStore = redux.createStore;

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

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'BUY_CAKE': 
//             return {
//                 // numberOfCakes: state.numberOfCakes - 1 // do not mutate the initial state, just create create a new one
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }
//         default: 
//             return state;
//     }
// }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUY_CAKE': 
            state = {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            };
        break;

        default: 
            return state;
    }
    return state;
}

const store = createStore(reducer);

console.log('Initial state', store.getState())

store.subscribe( () => { //  fat arrow function get fired when the store is updated
  console.log("Store updated ", store.getState());
})

store.dispatch( buyCake())
store.dispatch( buyCake())
store.dispatch( buyCake())