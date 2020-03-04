import {UserActionTypes} from './user.types';

const initialState = {
    currentUser: null
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default UserReducer;