const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const logger = require('redux-logger').default;



//state
const initialState = {
    loading: false,
    users: [],
    error: false,
}


//actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

            case FETCH_USERS_SUCCESS:
                return {
                    loading: false,
                        users: action.payload,
                        error: ''
                }

            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                        users: [],
                        error: action.payload,
                }
    }
}


// action creator
// const fetchUsers = () => {  // Not working as expected!  WHY?
//     return function(dispatch) {
//         dispatch(fetchUsersRequest()); // not useful: to show process initiated
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                 const users = response.data.map(user => [user.name, user.id]) //response.data ==> array of users
//                 dispatch(fetchUsersSuccess(users));
//             })
//             .catch((error) => {
//                 dispatch(fetchUsersFailure(error.message));  // err.message => err description
//             })
//     }
// }


const fetchUsers = (dispatch) => {  // OK !
    dispatch(fetchUsersRequest()); // not useful: to show process initiated
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data.map(user => [user.name, user.id]) //response.data ==> array of users
            dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
            dispatch(fetchUsersFailure(error.message));  // err.message => err description
        })
}


//store
const store = createStore(reducer, {}, applyMiddleware(logger, thunk));

// console.log(store.dispatch) // logger middleware does this instead
// store.subscribe(() => console.log(store.getState())) ;

store.dispatch(fetchUsers);