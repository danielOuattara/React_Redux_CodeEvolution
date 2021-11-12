import axios from 'axios';

import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE  
} from "./userTypes"


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


/* Basic Axios request: next ; must add dispatch action; see below
-------------------------------------------------------------- */

// export  const fetchUsers = () => {  
//     return function(dispatch) {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             const users = response.data
//         })
//         .catch(error => {
//             console.log(error.message);
//         })
//     }
// } 

export  const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchUsersFailure(errorMessage))
        })
    }
} 