
// ========================================== 2 separate reducers

// const redux = require("redux");
// const createStore = redux.createStore;

// function buyCake() {  // Action :=  function that return an object of any shape
//     return { 
//         type: "BUY_CAKE",
//         info: "First redux action"
//     }
// }

// function buyIceCream() {  // Action :=  function that return an object of any shape
//     return { 
//         type: "BUY_ICE_CREAM",
//         info: "First redux action"
//     }
// }

// const initialState = { // globale state
//     numberOfCakes: 10,
//     numbersOfIceCreams: 20,
// };

// const reducer = (state = initialState, action) => {  // Global reducer
//     switch(action.type) {
//         case 'BUY_CAKE': 
//             state = {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             };
//         break;

//         case 'BUY_ICE_CREAM': 
//             state = {
//                 ...state,
//                 numbersOfIceCreams: state.numbersOfIceCreams - 1
//             };
//         break;

//         default: 
//             return state;
//     }
//     return state;
// }

// const store = createStore(reducer);

// console.log('Initial state', store.getState())

// store.subscribe( () => { //  fat arrow function get fired when the store is updated
//   console.log("Store updated ", store.getState());
// })

// store.dispatch( buyCake())
// store.dispatch( buyCake())
// store.dispatch( buyCake())
// store.dispatch( buyIceCream())
// store.dispatch( buyIceCream())


//=================================================

const redux = require("redux");
const createStore = redux.createStore;


function buyCake() {  // Action :=  function that return an object of any shape
    return { 
        type: "BUY_CAKE",
        info: "First redux action"
    }
}

function buyIceCream() {  // Action :=  function that return an object of any shape
    return { 
        type: "BUY_ICE_CREAM",
        info: "First redux action"
    }
}

const initialStateCakes = {
    numberOfCakes: 10,
};

const initialStateIceCream = {
    numbersOfIceCreams: 20,
};

const reducerCakes = (state = initialStateCakes, action) => {
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

const reducerIceCream = (state = initialStateIceCream, action) => {
    switch(action.type) {
        case 'BUY_ICE_CREAM': 
            state = {
                ...state,
                numbersOfIceCreams: state.numbersOfIceCreams - 1
            };
        break;

        default: 
            return state;
    }
    return state;
}

const store = createStore(combineReducers); // redux creastore accepts only 1 reducers
                                    // how to make redux know and accepts 2 or + reduccres ??
                                    // next tutorial ... 

console.log('Initial state', store.getState())

store.subscribe( () => { //  fat arrow function get fired when the store is updated
  console.log("Store updated ", store.getState());
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
