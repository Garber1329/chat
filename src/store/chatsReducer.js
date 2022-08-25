import * as ActionTypes from './actionTypes';

export const Chats = (state = { isLoading: true,
    errMess: null,
    chats:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHATS:
            return {...state, isLoading: false, errMess: null, chats: action.payload};

        case ActionTypes.CHATS_LOADING:
            return {...state, isLoading: true, errMess: null, chats: []}

        case ActionTypes.CHATS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};